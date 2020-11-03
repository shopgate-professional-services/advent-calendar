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
    - `styles` (json): style for calendar grid item for this day (background, etc)
        - `expired` (json): for expired day
        - `future` (json): for future day
        - `active` (json): for active day
- `calendarPage` (json): Memoization options of shown disclaimer (fifo based)
    - `image` (string): image url to show on top of page
- `calendarGrid` (json): Styles for content and buttons (glamor)
    - `randomizeNumbers` (boolean): randomize calendar grid items
    - `fallingSnow` (boolean): show snow fall animation
    - `styles` (json): style for grid items
        - `grid` (json): for expired days
        - `gridItem` (json): for expired days
        - `expired` (json): for expired days
        - `future` (json): for expired days
        - `active` (json): for active days

## Example Configuration

```json
{
  "calendar": [
    {
      "day": 1,
      "image": "https://picsum.photos/90",
      "title": "Ho Ho Ho!",
      "subTitle": "Hinter Türchen # verbirgt sich:",
      "content": "Unsere Schokoladenspezialitäten für den ersten Dezember. Wir wünschen euch einen guten Start in die Weihnachtszeit",
      "buttonText": "LINK",
      "buttonLink": "/category",
      "gridLabel": {
        "front": null,
        "back": "😊"
      },
      "gridStyles": {
        "expired": {
          "front": null
        },
        "future": {
          "front": null
        },
        "active": {
          "front": {
            "backgroundImage": "url(https://picsum.photos/90)",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "cover"
          },
          "back": null
        }
      }
    }
  ],
  "calendarPage": {
    "image": "https://picsum.photos/120"
  },
  "calendarGrid": {
    "randomizeNumbers": true,
    "fallingSnow": true,
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
