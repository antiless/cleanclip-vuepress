---
canonicalUrl: "https://cleanclip.cc/jp/developer/swiftui-nswindow-inactive-firstmouse/"
---
# SwiftUI：非アクティブなNSWindow上のボタンをクリックしたとき、ボタンがマウスイベントを処理するようにする

NSViewは [acceptsFirstMouse](https://developer.apple.com/documentation/appkit/nsview/1483410-acceptsfirstmouse) メソッドをオーバーライドし、常に `true` を返します。
SwiftUIのビューには、このオーバーライドされたViewをoverlayで追加します。

```swift
import SwiftUI
import Cocoa

// マウスを受け入れるためのクラス
class MyViewView : NSView {
    override func acceptsFirstMouse(for event: NSEvent?) -> Bool {
        return true
    }
}

// Representableラッパー（SwiftUIへのブリッジ）
struct AcceptingFirstMouse : NSViewRepresentable {
    func makeNSView(context: NSViewRepresentableContext<AcceptingFirstMouse>) -> MyViewView {
        return MyViewView()
    }

    func updateNSView(_ nsView: MyViewView, context: NSViewRepresentableContext<AcceptingFirstMouse>) {
        nsView.setNeedsDisplay(nsView.bounds)
    }

    typealias NSViewType = MyViewView
}

// 使用例（SwiftUIのビュースタックのどこかで）
Text("Click me")
  .padding(20)
  .background(Color.yellow)
  .overlay(AcceptingFirstMouse()) // 上に配置する必要があります（透明です）
  .onTapGesture {
      print("Label tapped")
  }
```


---

著者：Sintone Li

記事のリンク：{{ $page.frontmatter.canonicalUrl }}