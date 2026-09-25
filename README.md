# Corona Cannon

**An open-source UV-C sterilizer for the 2020 mask shortage, designed to be built from hardware-store parts in a day, for under $100.**

In April 2020, when hospitals could not get commercial UV sterilizers and were re-using N95 masks, a small group of makers in Central Florida designed a UV-C sterilizer that anyone with a hardware store nearby could build. It was created by Gabriel Avram, Michael Miller and Todd Sampson, with advice and help from Fred Maxik, David Metcalf, Michael Schmidt and Carlos Carrasco of Orlando Health, and from Juan Santos, Lis Sampson and John Sampson. A prototype went to a local hospital system for testing. The designs were published free at corona-cannon.com from April to mid-2020.

This repository is the source of that website, made public in September 2026 as part of the record. The site itself is no longer online.

## What it is

The Corona Cannon uses 254 nm UV-C tubes inside a small enclosure to inactivate viruses and bacteria on masks and equipment — the same germicidal UV that hospitals already used for rooms and instruments, in a form a maker could build. Every design aimed to:

- use materials available at Lowe's, Home Depot or Amazon (UV-C bulbs excepted);
- be an easy build for most makers, finished in less than a day;
- cost $100 or less per unit for the basic build;
- need no specialized tools;
- be simple and intuitive for hospital staff to use.

`docs/parts-list-example.md` is one of the original parts lists, kept as an example of the build's cost and shape.

## What is here, and what is not

This is a [Gridsome](https://gridsome.org) (Vue) static site with a [Sanity.io](https://www.sanity.io) CMS behind it. The `src/` components carry the site's text — the project story, how UV-C works, the reading list of N95 decontamination research, and the safety disclaimer. The `cms/` schemas define the models, parts lists and process steps.

The build designs and step-by-step plans themselves lived in the Sanity dataset, not in this repository, so they are not reproduced here. If you are building a UV-C sterilizer today, start from the research in `src/components/HowItWorks.vue` and from current guidance — this project's designs are from the first weeks of the pandemic and were never updated after May 2020.

## Safety

**254 nm UV-C light is dangerous to eyes and skin.** Every design here enclosed the tubes and interlocked the lid. Never operate a UV-C tube exposed, never look at one, and use proper eye protection when testing. Everything in this repository is provided as is, without warranty or any guarantee of effectiveness.

## Running the site (as it was)

You need Node, Yarn and Git.

```sh
yarn global add @gridsome/cli @sanity/cli
git clone https://github.com/toddsampson/corona-cannon.git && cd corona-cannon
yarn
gridsome develop            # site at http://localhost:8080
cd cms && sanity start      # CMS at http://localhost:3333
```

The site expects the original Sanity project (`gqr3e19k`, dataset `production`) and will build empty pages without it.

## Contact

Todd Sampson · tsampson@cloudspace.com
