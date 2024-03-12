---
canonicalUrl: "https://cleanclip.cc/ko/developer/swiftui-nswindow-inactive-firstmouse/"
---
# SwiftUI NSWindow 비활성 상태에서 버튼을 클릭할 때, 버튼이 마우스 이벤트를 처리하도록 만들기

NSView는 [acceptsFirstMouse](https://developer.apple.com/documentation/appkit/nsview/1483410-acceptsfirstmouse) 메서드를 오버라이드하여 항상 `true`를 반환하도록합니다.
SwiftUI 뷰에서 이 오버라이드된 뷰를 overlay로 추가합니다.

```swift
import SwiftUI
import Cocoa

// 마우스만 수용
class MyViewView : NSView {
    override func acceptsFirstMouse(for event: NSEvent?) -> Bool {
        return true
    }
}

// Representable 래퍼 (SwiftUI로 브리지)
struct AcceptingFirstMouse : NSViewRepresentable {
    func makeNSView(context: NSViewRepresentableContext<AcceptingFirstMouse>) -> MyViewView {
        return MyViewView()
    }

    func updateNSView(_ nsView: MyViewView, context: NSViewRepresentableContext<AcceptingFirstMouse>) {
        nsView.setNeedsDisplay(nsView.bounds)
    }

    typealias NSViewType = MyViewView
}

// 사용법 (SwiftUI 뷰 스택의 어딘가에서)
Text("클릭하세요")
  .padding(20)
  .background(Color.yellow)
  .overlay(AcceptingFirstMouse()) // 상단에 있어야 함 (투명하다는 혼란을 피하기 위해)
  .onTapGesture {
      print("라벨이 탭되었습니다")
  }
```


---

작성자: Sintone Li

원문 주소: {{ $page.frontmatter.canonicalUrl }}
