---
canonicalUrl: "https://cleanclip.cc/de/developer/swiftui-nswindow-inactive-firstmouse/"
---

# SwiftUI Klicken Sie auf Schaltflächen auf einem inaktiven NSWindow und lassen Sie die Schaltflächen standardmäßig das Mausereignis verarbeiten, nicht das Fenster

NSView hat die Methode [acceptsFirstMouse](https://developer.apple.com/documentation/appkit/nsview/1483410-acceptsfirstmouse) überschrieben, die immer `true` zurückgibt.
Fügen Sie in SwiftUI-Ansichten diese überschriebene Ansicht als Überlagerung hinzu.

```swift
import SwiftUI
import Cocoa

// Nur Mausakzeptierer
class MyViewView: NSView {
    override func acceptsFirstMouse(for event: NSEvent?) -> Bool {
        return true
    }
}

// Darstellbarer Wrapper (Bridge zu SwiftUI)
struct AcceptingFirstMouse: NSViewRepresentable {
    func makeNSView(context: NSViewRepresentableContext<AcceptingFirstMouse>) -> MyViewView {
        return MyViewView()
    }

    func updateNSView(_ nsView: MyViewView, context: NSViewRepresentableContext<AcceptingFirstMouse>) {
        nsView.setNeedsDisplay(nsView.bounds)
    }

    typealias NSViewType = MyViewView
}

// Verwendung (irgendwo in Ihrem SwiftUI-View-Stack)
Text("Klicke mich")
  .padding(20)
  .background(Color.yellow)
  .overlay(AcceptingFirstMouse()) // muss oben sein (kein Durcheinander, es ist transparent)
  .onTapGesture {
      print("Label wurde getippt")
  }
```


---

Autor: Sintone Li

Artikeladresse: {{ $page.frontmatter.canonicalUrl }}
