---
canonicalUrl: "https://cleanclip.cc/developer/swiftui-nswindow-inactive-firstmouse/"
---
# When clicking on a non-active NSWindow button in SwiftUI, the button should handle the mouse event by default instead of the window.

NSView overrides the [acceptsFirstMouse](https://developer.apple.com/documentation/appkit/nsview/1483410-acceptsfirstmouse) method and always returns `true`.
In SwiftUI, add this overridden View to the overlay of the view.

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

Article address: {{ $page.frontmatter.canonicalUrl }}
