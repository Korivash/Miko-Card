# __About__
**Musicard** is a futuristic music card library designed for Discord bots.

# __Installation__
```
npm install git+https://github.com/Miko-Radio/mikoradio-card
```

# __Example__
This example code will generate a music card image and save it.
```js
(async () => {
    const { mikocard } = require("mikocard");
    const fs = require("fs");

    const card = new mikocard()
        .setName("Biru Baru")
        .setAuthor("Sejenak")
        .setColor("auto")
        .setTheme("classic")
        .setBrightness(50)
        .setThumbnail("https://cdn.is-a.fun/mewwme/mewwme.png")
        .setProgress(10)
        .setStartTime("0:00")
        .setEndTime("04:27")

    const cardBuffer = await card.build();

    fs.writeFileSync(`mikocard.png`, cardBuffer);
    console.log("Done!");
})()
```

# __Output__
This is the **classic** output of musicard.
[![Discord Icon](https://raw.githubusercontent.com/Miko-Radio/cdn/main/mikocard/theme1/31.png)](https://your-discord-server-link.com)



