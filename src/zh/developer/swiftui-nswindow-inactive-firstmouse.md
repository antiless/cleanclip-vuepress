---
canonicalUrl: "https://cleanclip.cc/zh/developer/swiftui-nswindow-inactive-firstmouse/"
---
# SwiftUI 点击未激活的 NSWindow 上的按钮时，默认让按钮处理鼠标事件，而不是窗口

NSView 重载 [acceptsFirstMouse](https://developer.apple.com/documentation/appkit/nsview/1483410-acceptsfirstmouse) 方法，始终返回 `true`。
SwiftUI 的视图里 overlay 添加这个重载的 View。

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

作者：Sintone Li

文章地址：{{ $page.frontmatter.canonicalUrl }}

