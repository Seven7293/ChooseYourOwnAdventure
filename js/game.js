// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You enter a mansion, and you see a floating inanimate object. which do you pull out first?",
            choices: [
                {
                    text: "Flashlight",
                    nextLevel: "ghost",
                },

                {
                    text: "Vacuum",
                    nextLevel: "ghosti",
                },
            ]
        },

        ghost: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "A ghost manifests in front of you! What do you do?",
            choices: [
                {
                    text: "Run Away!",
                    nextLevel: "BR",
                },

                {
                    text: "Scare It Back!",
                    nextLevel: "Faint",
                },
            ]
        },

        ghosti: {
            message: "Why? Just... Go back...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
    
        BR: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You manage to reach a bathroom, but the ghost follows you. You decide to flash the light at it directly. What's next?",
            choices: [
                {
                    text: "Vacuum it up",
                    nextLevel: "saved",
                },

                {
                    text: "Run again",
                    nextLevel: "die",
                },
            ]
        }
    }
};
