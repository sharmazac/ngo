# Image credits

Every photograph in `assets/img/photos/` was found through [Openverse](https://openverse.org)
and carries a **CC0 / public-domain** licence — free for commercial use, no attribution
required and no permission needed. They are credited here anyway, as good practice.

Each file was centre-cropped to its slot and re-encoded as JPEG (quality 72).

| File | Title | Creator | Licence | Source | Used on |
| --- | --- | --- | --- | --- | --- |
| `photos/hero.jpg` | Japanese junior high school girls posing for | Michelle_Maria | CC0 | [source](https://commons.wikimedia.org/w/index.php?curid=123427751) | index.html — hero |
| `photos/photo-wide.jpg` | Business Team | Direct Media | CC0 | [source](https://stocksnap.io/photo/business-team-V8NHXQVQ70) | index.html — about collage; events pages; blog / contact pages |
| `photos/photo-square.jpg` | DHS Secretary Alejandro Mayorkas Volunteers | usdhs | CC0 | [source](https://www.rawpixel.com/image/11072761/photo-image-face-person-public-domain) | index.html — action card tile; events pages; blog / contact pages |
| `photos/photo-1.jpg` | Pindi Umra School | Nineprimes | CC0 | [source](https://commons.wikimedia.org/w/index.php?curid=169448763) | index.html — about inset, education cause; events.html — featured event; blog / contact pages |
| `photos/photo-2.jpg` | Doctor Mask | Direct Media | CC0 | [source](https://stocksnap.io/photo/doctor-mask-9BIAIEZCTX) | index.html — health cause, events; blog / contact pages |
| `photos/photo-3.jpg` | Aerial view of woman on a marigold field. Ba | Artem Beliaikin | CC0 | [source](https://www.flickr.com/photos/157635012@N07/45438879264) | index.html — livelihoods cause; events pages; blog / contact pages |
| `photos/photo-4.jpg` | 2018_10_15_Hand_Over_Of_Shallow-Wells-11 | AMISOM Public Information | CC0 | [source](https://www.flickr.com/photos/61765479@N08/44620397904) | index.html — water cause; events pages; blog / contact pages |
| `photos/photo-5.jpg` | DHS Secretary Alejandro Mayorkas Volunteers | usdhs | CC0 | [source](https://www.rawpixel.com/image/11072761/photo-image-face-person-public-domain) | index.html — disaster relief cause; events pages; blog / contact pages |
| `photos/photo-tall.jpg` | Hand Water Pump | TurkishTravels | CC0 | [source](https://commons.wikimedia.org/w/index.php?curid=102913655) | index.html — impact band; blog / contact pages |
| `photos/band.jpg` | Family Portrait | Family Moments | CC0 | [source](https://stocksnap.io/photo/family-portrait-R0P6STPFE0) | index.html — impact band bg, volunteer CTA; about.html and events.html — closing CTA; blog / contact pages |
| `photos/g-hero.jpg` | Family Portrait | Family Moments | CC0 | [source](https://stocksnap.io/photo/family-portrait-R0P6STPFE0) | home-giveon.html — hero; events.html — page banner |
| `photos/g-1.jpg` | Pindi Umra School | Nineprimes | CC0 | [source](https://commons.wikimedia.org/w/index.php?curid=169448763) | home-giveon.html — about collage; about.html — story collage; events pages; blog / contact pages |
| `photos/g-2.jpg` | DHS Secretary Alejandro Mayorkas Volunteers | usdhs | CC0 | [source](https://www.rawpixel.com/image/11072761/photo-image-face-person-public-domain) | home-giveon.html — about collage; about.html — story collage inset; events pages; blog / contact pages |
| `photos/g-3.jpg` | Doctor Mask | Direct Media | CC0 | [source](https://stocksnap.io/photo/doctor-mask-9BIAIEZCTX) | home-giveon.html — about collage; about.html — partner quote; events pages; blog / contact pages |
| `photos/g-4.jpg` | Doctor Mask | Direct Media | CC0 | [source](https://stocksnap.io/photo/doctor-mask-GWE6UQDBTN) | home-giveon.html — feature band, healthcare cause; about.html — numbers band |
| `photos/g-5.jpg` | Japanese junior high school girls posing for | Michelle_Maria | CC0 | [source](https://commons.wikimedia.org/w/index.php?curid=123427751) | home-giveon.html — education cause; events pages; blog / contact pages |
| `photos/g-6.jpg` | DHS Secretary Alejandro Mayorkas Volunteers | usdhs | CC0 | [source](https://www.rawpixel.com/image/10993895/photo-image-person-public-domain-food) | home-giveon.html — hunger cause; events pages; blog / contact pages |
| `photos/g-cta.jpg` | Business Team | Direct Media | CC0 | [source](https://stocksnap.io/photo/business-team-VCL25OYGFY) | home-giveon.html — closing CTA; about.html — page banner; blog / contact pages |

## Replace these before you launch

They are stand-ins, and two things are wrong with shipping them for real:

1. They show **identifiable people photographed at other organisations**. The licence
   allows the use, but presenting them as your beneficiaries, staff or volunteers
   misrepresents them.
2. None of them are your programs, so they quietly undercut the specific claims the copy makes.

Drop replacements in at the same paths and keep each `width`/`height` attribute in the HTML
in sync with the new file. The amber design converts photos to black-and-white in CSS
(`filter: grayscale(100%)`), so give it colour originals.
