---
canonicalUrl: "https://cleanclip.cc/se/developer/swiftui-nswindow-inactive-firstmouse/"
---
# SwiftUI klicka på knappen på en inaktiv NSWindow gör att knappen standardmässigt hanterar muspekarevenemang istället för fönstret

NSView överlagrar metoden [acceptsFirstMouse](https://developer.apple.com/documentation/appkit/nsview/1483410-acceptsfirstmouse), och returnerar alltid `true`.
I SwiftUI-vyn läggs denna överlagring View till som overlay.

```swift
import SwiftUI
import Cocoa

// Endast musaccepterare
class MyViewView : NSView {
    override func acceptsFirstMouse(for event: NSEvent?) -> Bool {
        return true
    }
}

// Representable-wrapper (brygga till SwiftUI)
struct AcceptingFirstMouse : NSViewRepresentable {
    func makeNSView(context: NSViewRepresentableContext<AcceptingFirstMouse>) -> MyViewView {
        return MyViewView()
    }

    func updateNSView(_ nsView: MyViewView, context: NSViewRepresentableContext<AcceptingFirstMouse>) {
        nsView.setNeedsDisplay(nsView.bounds)
    }

    typealias NSViewType = MyViewView
}

// Användning (någonstans i din SwiftUI-vy-stack)
Text("Klicka på mig")
  .padding(20)
  .background(Color.yellow)
  .overlay(AcceptingFirstMouse()) // måste ligga överst (ingen förvirring, den är transparent)
  .onTapGesture {
      print("Etikett tryckt")
  }
```


---

Författare: Sintone Li

Artikeladress: {{ $page.frontmatter.canonicalUrl }}