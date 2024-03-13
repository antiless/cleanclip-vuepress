---
canonicalUrl: "https://cleanclip.cc/gb/articles/Why-not-all-clipboard-managers-support-Final-Cut-Pro-copies/"
---

# Answering the User's Question: Why do not all clipboard apps support recording Final Cut Pro copies?

Final Cut Pro has never had a useful bookmark feature, so a clipboard tool with bookmark functionality would be an excellent companion for Final Cut Pro.
![Final Cut Pro collaborates with the free clipboard management tool CleanClip](./cooperate-with-final-cut-pro.png)

However, not all clipboard management tools support bookmark functionality, nor do all tools support recording Final Cut Pro copy data.

## **User's Question:**

> Does it (CleanClip) log copied items from pro apps like Final Cut Pro? I use Paste to quickly paste clips and clip effects, and I know not all clipboard managers log these kinds of non-text non-image clipboard items.
Out of curiosity, what extra steps were required to do this (asking as a non-developer)? I wonder why not all clipboard managers support this.

> Does [CleanClip](https://cleanclip.cc) log copied items from professional applications (like Final Cut Pro)? I use Paste to paste clips and clip effects quickly, and I am aware that not all clipboard managers log such non-text non-image clipboard items.
Out of curiosity, are there any additional steps required to achieve this (asking as a non-developer)? I am curious why not all clipboard managers provide this feature.

[Reddit Source](https://www.reddit.com/r/macapps/comments/193ds1j/comment/khe5xjx/?utm_source=share&utm_medium=web2x&context=3)

## **Answer:**

Let me explain briefly.

The clipboard workflow is simple: App A puts its content into the clipboard, and App B retrieves it from the clipboard to use it.

Here lies a question, **how does B know what A put and how to use that data?**
Mac has a convention where every content put into the clipboard must have at least two things: 1. **Type Name**, to differentiate the type of copied content. 2. **The content itself**.

So, when B retrieves the data, it first asks the clipboard, "What type of data is this?" The clipboard responds with something like **"image (type name)".** Then B says, "Give me the data," and upon receiving it, B interprets the data using **image interpretation** and proceeds to display it. This holds for other types of data as well.

------
**Now let's discuss public and private clipboard types.**

**Public Types:**
Basic text, image, and file types are public types. These are defined by the Mac system, so all apps on Mac know their type names and data structures.

**Private Types:**
In addition, there are apps like FCP that wish to copy complex content, such as three video segments, each segment's duration, their positions on the timeline during copying, hierarchical relationships, etc.
In such cases, the predefined public types on Mac are insufficient. What does FCP do then? FCP creates a new type called "fcp" with its specific data structure.
Now, within the FCP app, it can freely copy and paste data of type "fcp" as FCP itself is aware of this custom type and how to interpret it.

**Something defined by one app, unknown to others, is a private type.**

In fact, every app can see there is a type named "fcp" data, but they do not know how to interpret it.

-------
**What is the difference between interpreting private data?**


A crucial point is that a clipboard app only needs to know the data types without necessarily interpreting the data.

**Knowing the data types helps in marking the type of copied content in the clipboard app's interface:** text type, image type, fcp type.

**Interpreting the data improves user-friendliness** as it allows us to present a friendly interface in the clipboard app:
- For text, display the initial characters.
- For images, show a preview and image dimensions.
- For fcp, since we cannot interpret it, aside from displaying "fcp," we cannot make this data more user-friendly.
![image](https://github.com/auv1107/blug/assets/2681464/e0f8786a-7078-449d-83b4-21d080853f28)

------

**Why do some clipboards support it while others do not?**

There could be various reasons. Based on the explanations above, a possible reason is:

**1. Lack of distinguishable private data, leading to poor user experience**

For example, I copied ten contents in FCP, but since the data content is unknown, even if it is supported, users cannot differentiate which is which. This renders the support meaningless.

**2. Product positioning constraints**

Some apps, to meet specific user needs, implement features like whitelist functionality. For instance, Maccy allows users to choose a whitelist of allowed monitoring types.

With an infinite number of private types, it is impossible to list them all exhaustively. Without an exhaustive list, not all private types can be allowed, inevitably blocking a significant amount of private data.

**3. Niche demand; team's choice not to support**

Compared to standard types, these private types represent niche demands. The affected user base is small, motivating some teams to opt not to support them.

However, in the clipboard domain within the editing field, I believe there is significant untapped potential. I intend to support it and would appreciate the opportunity to communicate and explore user needs further.

**4. Developer oversight**

This is very plausible. If there is insufficient feedback from users or lack of experience in clipboard development, developers might overlook this issue.

These reasons sum up roughly: **either the development team chooses not to support it or due to lack of awareness of such issues.**

I initially intended for a brief explanation but ended up sharing a lot inadvertently. Hopefully, these details satisfy your curiosity.

---

Author: Sintone Li

Article Link: {{ $page.frontmatter.canonicalUrl }}
