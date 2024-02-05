---
canonicalUrl: "https://cleanclip.cc/articles/Why-not-all-clipboard-managers-support-Final-Cut-Pro-copies/"
---
# Why don't all clipboard manager apps support recording copy items from Final Cut Pro?

Final Cut Pro has never had a useful bookmarking feature, so a clipboard tool with bookmarking functionality would be a great companion to Final Cut Pro.
![Final Cur Pro cooperate with free clipboard manager CleanClip](./cooperate-with-final-cut-pro.png)


However, not all clipboard management tools support the bookmarking feature, and not all tools support recording the copy data of Final Cut Pro.

## Why don't all clipboard manager apps support recording copy items from Final Cut Pro?

The clipboard workflow is very simple. App A puts its own data into the clipboard, and App B takes them out of the clipboard and puts them into itself.

There is a question here: **how does App B know what App A has put in and how to use this data?**

On Mac, it is agreed that every content put into the clipboard must have at least two things: 1. **The type name**, used to distinguish what type of content is being copied. 2. **The content itself.**

So when App B retrieves the data, it will first ask the clipboard: "What kind of data is this?" The clipboard will say it is an **image (type name)**. Then App B will say, "Give me the data." After receiving the data, App B will **parse it as an image** and then display it. The same principle applies to other types of data.



-------

## This needs to further explain the types of public clipboard and private clipboard.

**Public types**: The most basic text, image, and file types are public types. Because this is defined by the Mac system, all apps on Mac know what their type names are and what their data structures look like.

**Private types**: In addition, there are some apps like FCP that have complex content they want to copy. Every time CMD+C is pressed, these data need to be stored in the clipboard: 3 video clips, the duration of each clip, their positions on the timeline when copied, hierarchical relationships, and so on. At this time, the public types supported by Mac are not enough. What should we do?

FCP says, I will create a new type called "fcp" and define its data structure myself. In this way, within the FCP app, it can freely copy and paste data of the "fcp" type. Because FCP knows how to parse data with the type name "fcp".

**A certain app defines it by itself, and other apps are not aware of it. This is a private type.**

In fact, every app can see that there is a data type called "fcp", they just don't know how to parse it.

-------

## What is the difference between being able to or not being able to parse private data?

One important point is that the clipboard app only needs to know what type of data there is, and does not necessarily need to parse the data.

**Do know what types of data can help us mark the type of copied item** on the interface of the clipboard app: text type, image type, fcp type.

**If we can parse the data, it can help us make the interface more user-friendly**. We can then mark the approximate content of this data on the interface of the clipboard app.

If it is text, parse and display the first few characters.

If it is an image, parse and display a preview image and the image size.

If it is fcp, we cannot parse it. Therefore, besides the "fcp" characters on the interface, we cannot make this data more user-friendly.

![cleanclip clipboard records](./clipboard-records.png)
-----

## Why do some clipboards support while others do not support?



The reason could be diverse. Based on the information above, we can identify some possible reason:

**1. These private data do not have any data characteristics.**

We only know the type names, which is not user-friendly. For example, I copied ten contents in FCP, but because I don't know the data content, even if it is supported, users cannot distinguish which one is which. It is meaningless for use.



**2. Product positioning restrictions**

Some apps have a whitelist feature for certain user needs. For example, Maccy allows users to choose the types of whitelisted items to be monitored.

Because there are infinitely many private types, it is impossible for us to enumerate them all. Without enumeration, it is impossible to allow all private types. Therefore, a large amount of private data is destined to be blocked.



**3. Niche demand, the team chooses not to support.**

Compared to those public types, these private types of requirements are niche demands. They have a small impact on the user base, and the team may choose not to support them proactively.

However, I believe that there is a lot of untapped potential for the clipboard in the field of editing. I plan to support it and hope to communicate with you guys more and explore the needs of its usage if given the opportunity.



**4. Developer's mistake**

This is very possible if there is not enough user feedback and the developer lacks experience in developing the clipboard. There is a chance that they will not notice this issue.

[CleanClip](https://cleanclip.cc) belongs this one. I'm new to macOS development and clipboard manager, made tons of mistakes.



I can think of those possibilities: **either the development team chose not to support it, or they didn't realize there was such a problem due to lack of experience.**

I originally wanted to explain it briefly, but I accidentally said too much haha. I hope these words satisfies your curiosity.


---

Author: Sintone Li

Article address: {{ $page.frontmatter.canonicalUrl }}