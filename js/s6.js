function init() {
    console.log('s6 Initialized');
    $("p").each(function (index) {
        fadeInTextInElement(index, $(this));
    });
}

function fadeInTextInElement(index, paragraph) {
    // const paragraph = $(this);
    const textContent = paragraph.text();

    // Clear the original content of the paragraph
    paragraph.text('');

    const localDelay = getRandomValue(1, 8);
    // Iterate through each character in the text content
    for (let i = 0; i < textContent.length; i++) {
        let char = textContent.charAt(i);
        // Wrap each letter in a <span> element
        let span = $("<span>")
            .text(char)
            .css("display", "inline")
            .addClass('s6-animate-accent-to-primary')
            .appendTo(paragraph)
            .hide()
            .delay(index * 100 + (i * localDelay))
            .fadeIn(100);

        if (brandMatch(char) && runProbability(10)) span.css("filter", "hue-rotate(5deg)"); // <-- just an easteregg

    }
}

function brandMatch(char) {
    const regex = /[syx6]/i;
    return regex.test(char)
}


function runProbability(pct) {
    // Generate a random number between 0 and 100 (inclusive of 0, exclusive of 100)
    const randomNum = Math.random() * 100;

    if (randomNum < pct) {
        return true;
    } else {
        // console.log("Action not executed.");
        return false;
    }
}

function getRandomValue(min, max) {
    // Calculate the range of values (inclusive of min and max)
    const range = max - min + 1;

    // Generate a random number between 0 and range - 1
    const randomOffset = Math.floor(Math.random() * range);

    // Add the random offset to the min value to get the final random value
    const randomValue = min + randomOffset;

    return randomValue;
}



// run init function
init();