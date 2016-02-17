@page bit-social

An example DoneJS component that renders page sharing links to multiple social networks.

Links to:
- Facebook
- Twitter
- Google Plus
- Pinterest
- Delicious
- Stumbleupon
- LinkedIn

# bit-social

Usage:

```html
<bit-social url='{myUrl}' text='{myText}' image='{myImage}'/>
```

Attributes: 
- URL - Required. A fully qualified URL to the page to be shared.

- Text - Required. Text description of the shared URL.  

- Image - Optional. A fully qualified URL to an image depicting the content of the shared url. 
Omitting this will prevent a Pinterest link from being rendered. 
