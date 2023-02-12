let quote = document.querySelector('.quote')
let person = document.querySelector('.person')
const btn = document.querySelector('button')

let quotes = [
    {
        quote: `'Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.'`,
        person: `Rabindranath Tagore`
    },
    {
        quote: `'Don't judge each day by te harvest you reap but by the seeds you plant.'`,
        person: `Robert Louis Stevenson`
    },
    {
        quote: `'It is always the simple that produces the marvelous.'`,
        person: `Amelia Barr`
    },
    {
        quote: `'Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.'`,
        person: `Marcus Aurelius`
    },
    {
        quote: `'Your present circumstances don't determine where you can go; they merely determine where you start'`,
        person: `Nido Qubein`
    },
    {
        quote: `'Don't be afraid to give up the good to go for the great.'`,
        person: `John D. Rockefeller`
    },
    {
        quote: `'Go as far as you can see; when you get there, you will be able to see farther'`,
        person: `J.P.Morgan`
    },
    {
        quote: `'Luck is a dividend of sweat. The more you sweat, the luckier you get.'`,
        person: `Ray Kroc`
    },
    {
        quote: `'Everyone who's ever taken a shower has an idea. It's the person who gets out of the shower, dries off and does something about it who makes a difference.'`,
        person: `Nolan Bushnell`
    },
    {
        quote: `'It's during our darkest moment that we must focus to see the light.'`,
        person: `Aristotle Onassis`
    },
    {
        quote: `'Nothing is impossible, the word itself says 'I'm possible'!'`,
        person: `Audrey Hepburrn`
    }
]

btn.addEventListener ('click', () =>{
    
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

