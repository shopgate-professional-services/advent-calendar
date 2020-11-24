# Shopgate Connect - Advent Calendar extension

This extension provides advent calendar page to show daily configured entries.

You can also see a demo of advent calendar:
- [calendar page](./demo/page.png)
- [reward sheet](./demo/reward.png)

## Extension pages

Pages can be referenced from widgets or used with deep links.
This extension uses such pages:


- `/advent-calendar` a page where calendar is placed.

## Configuration

- `calendar` (json): the calendar config. Should contain 24 entries (for each day from 1 Dec to 24 Dec). Each entry consists of
    - `day` (number): day number in range of 1-24
    - `image` (string): image url to show for this entry
    - `title` (string): title of this entry
    - `content` (string): content to show for this entry (can be html)
    - `buttonText` (string): button text
    - `buttonLink` (string): button link
    - `grid` (json): grid item labels / images for this day
        - `frontLabel` (string): front label
        - `frontImage` (string): front image
        - `backLabel` (string): back label
        - `backImage` (string): back image
- `calendarPage` (json): Memoization options of shown disclaimer (fifo based)
    - `image` (string): image url to show on top of page
    - `styles` (json): styles for calendar page
- `calendarGrid` (json): Styles for content and buttons (glamor)
    - `randomizeNumbers` (boolean): randomize calendar grid items
    - `fallingSnow` (boolean): show snow fall animation
    - `sheetDelay` (number): delay of showing the reward sheet (in ms)
    - `styles` (json): style for grid
        - `grid` (json): styles for grid
        - `gridItem` (json): styles for grid item
        - `expired` (json): styles for active day grid item
        - `future` (json): styles for future day grid item
        - `active` (json): styles for active day grid item
- `rewardSheet` (json): Styles for reward sheet
    - `headerImage` (string): Image url for header image in sheet
    - `styles` (json): style for reward sheet
         - `title`: (json): styles title
         - `subTitle`: (json): styles stubTitle
         - `content`: (json): styles content wrapper
         - `image`: (json): styles image wrapper
         - `link`: (json): styles link
         - `text`: (json): styles text

## Example Configuration

```json
{
  "calendar": [
    {
      "day": 1,
      "image": "https://picsum.photos/600/200",
      "title": "Ho Ho Ho!",
      "content": "Unsere Schokoladenspezialitäten für den ersten Dezember. Wir wünschen euch einen guten Start in die Weihnachtszeit",
      "subTitle": "Hinter Türchen # verbirgt sich:",
      "buttonLink": "/category",
      "buttonText": "LINK",
      "grid": {
        "frontLabel": null,
        "backLabel": "☺",
        "frontImage": "https://picsum.photos/80",
        "backImage": null
      }
    }
  ],
  "calendarPage": {
    "image": "https://picsum.photos/120"
  },
  "calendarGrid": {
    "randomizeNumbers": true,
    "fallingSnow": true,
    "sheetDelay": 1500,
    "styles": {
      "grid": {
        "backgroundImage": "url(https://picsum.photos/400/800)",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "contain"
      },
      "gridItem": null,
      "expired": {
        "background": "#f4f4f4",
        "color": "#f4f4f4"
      },
      "future": {
        "background": "#f4f4f4",
        "color": "#f4f4f4"
      },
      "active": {
        "background": "#f4f4f4",
        "color": "#f4f4f4"
      }
    }
  }
}
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.
