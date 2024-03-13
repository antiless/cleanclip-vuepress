---
canonicalUrl: "https://cleanclip.cc/ar/developer/swiftui-nswindow-inactive-firstmouse/"
---
# عند النقر على زر في NSWindow غير النشط في SwiftUI، يتم تمكين الزر من معالجة حدث الماوس بدلاً من النافذة افتراضيًا

تعيد NSView الطريقة [acceptsFirstMouse](https://developer.apple.com/documentation/appkit/nsview/1483410-acceptsfirstmouse) وتقوم بإرجاع `true` دائمًا.
يضاف هذا الإعادة تحميل View إلى overlay في مشاهد SwiftUI.

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

// الاستخدام (في أي مكان في تراكيب SwiftUI الخاصة بك)
Text("انقر هنا")
  .padding(20)
  .background(Color.yellow)
  .overlay(AcceptingFirstMouse()) // يجب أن يكون في الأعلى (ليس هناك ارتباك، إنه شفاف)
  .onTapGesture {
      print("تم النقر على العلامة")
  }
```


---

المؤلف: Sintone Li

عنوان المقال: {{ $page.frontmatter.canonicalUrl }}
