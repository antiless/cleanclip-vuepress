---
canonicalUrl: "https://cleanclip.cc/gb/developer/swiftui-nswindow-inactive-firstmouse/"
---
# SwiftUI Buttons on Inactive NSWindow by Default Handle Mouse Events Instead of the Window

NSView overrides the [acceptsFirstMouse](https://developer.apple.com/documentation/appkit/nsview/1483410-acceptsfirstmouse) method, always returning `true`.
In SwiftUI views, overlay this overridden View.

```swift
import SwiftUI
import Cocoa

// Just mouse accepter
class MyViewView : NSView {
    override func acceptsFirstMouse(for event: NSEvent?) -> Bool {
        return true
    }
}

// Representable wrapper (bridge to SwiftUI)
struct AcceptingFirstMouse : NSViewRepresentable {
    func makeNSView(context: NSViewRepresentableContext<AcceptingFirstMouse>) -> MyViewView {
        return MyViewView()
    }

    func updateNSView(_ nsView: MyViewView, context: NSViewRepresentableContext<AcceptingFirstMouse>) {
        nsView.setNeedsDisplay(nsView.bounds)
    }

    typealias NSViewType = MyViewView
}

// Usage (somewhere in your SwiftUI view stack)
Text("Click me")
  .padding(20)
  .background(Color.yellow)
  .overlay(AcceptingFirstMouse()) // must be on top (no confuse, it is transparent)
  .onTapGesture {
      print("Label tapped")
  }
```


---

Author: Sintone Li

Article link: {{ $page.frontmatter.canonicalUrl }}