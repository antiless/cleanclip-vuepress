---
canonicalUrl: "https://cleanclip.cc/sk/developer/swiftui-nswindow-inactive-firstmouse/"
---
# SwiftUI Kliknutie na tlačidlo na neaktívnom NSWindow štruktúre predbežne spracuje udalosti myši tlačidla namiesto okna

NSView predefinuje [metódu acceptsFirstMouse](https://developer.apple.com/documentation/appkit/nsview/1483410-acceptsfirstmouse), ktorá vždy vráti `true`.
V štruktúre SwiftUI je táto predefinovaná View pridaná cez overlay.

```swift
import SwiftUI
import Cocoa

// Nahlásič myši
class MyViewView : NSView {
    override func acceptsFirstMouse(for event: NSEvent?) -> Bool {
        return true
    }
}

// Obal reprezentovaný (most k SwiftUI)
struct AcceptingFirstMouse : NSViewRepresentable {
    func makeNSView(context: NSViewRepresentableContext<AcceptingFirstMouse>) -> MyViewView {
        return MyViewView()
    }

    func updateNSView(_ nsView: MyViewView, context: NSViewRepresentableContext<AcceptingFirstMouse>) {
        nsView.setNeedsDisplay(nsView.bounds)
    }

    typealias NSViewType = MyViewView
}

// Použitie (niekde vo vašej štruktúre SwiftUI zásobníka)
Text("Klikni na mňa")
  .padding(20)
  .background(Color.yellow)
  .overlay(AcceptingFirstMouse()) // musí byť navrchu (žiadne zavádzanie, je transparentné)
  .onTapGesture {
      print("Kliknutie na štítok")
  }
```


---

Autor: Sintone Li

Link na článok：{{ $page.frontmatter.canonicalUrl }}
