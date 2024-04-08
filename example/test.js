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