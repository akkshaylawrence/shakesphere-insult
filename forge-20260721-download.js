/* Minimal Shakespearean insult forge */

document.addEventListener('DOMContentLoaded', () => {
    const col1Words = [
        { word: "artless", def: "Uncultured, lacking skill or subtlety", type: "Adjective" },
        { word: "bawdy", def: "Coarsely indecent, humorously obscene", type: "Adjective" },
        { word: "beslubbering", def: "Slobbering over, smearing filth upon", type: "Adjective" },
        { word: "bootless", def: "Futile, useless, producing no gain", type: "Adjective" },
        { word: "churlish", def: "Surly, ill-bred, rude and boorish", type: "Adjective" },
        { word: "cockered", def: "Pampered, coddled, spoiled rotten", type: "Adjective" },
        { word: "cloutish", def: "Clumsy, awkward, lumpish", type: "Adjective" },
        { word: "craven", def: "Contemptibly fainthearted, cowardly", type: "Adjective" },
        { word: "dankish", def: "Disagreeably damp, moist and cold", type: "Adjective" },
        { word: "dissembling", def: "Hypocritical, deceitful, false-faced", type: "Adjective" },
        { word: "dray-officed", def: "Employed in menial, dirty cart work", type: "Adjective" },
        { word: "errant", def: "Straying from proper course, notorious", type: "Adjective" },
        { word: "fawning", def: "Cringing, servile, excessively sycophantic", type: "Adjective" },
        { word: "fobbing", def: "Cheating, deceitful, tricking", type: "Adjective" },
        { word: "froward", def: "Perverse, difficult to deal with, stubborn", type: "Adjective" },
        { word: "frothy", def: "Lacking substance, superficial, empty", type: "Adjective" },
        { word: "gleeking", def: "Scoffing, jesting contemptuously", type: "Adjective" },
        { word: "goatish", def: "Lustful, lecherous, unrefined", type: "Adjective" },
        { word: "gorbellied", def: "Gluttonous, fat-paunched, heavy-bellied", type: "Adjective" },
        { word: "impertinent", def: "Insolent, irrelevant, intrusive", type: "Adjective" },
        { word: "infectious", def: "Pestilential, noxious, foul", type: "Adjective" },
        { word: "jarring", def: "Harsh-sounding, discordant, annoying", type: "Adjective" },
        { word: "loggerheaded", def: "Blockheaded, stupid, dull-witted", type: "Adjective" },
        { word: "lumpish", def: "Heavy, sluggish, clumsy", type: "Adjective" },
        { word: "mammering", def: "Hesitating, stammering with indecision", type: "Adjective" },
        { word: "mangled", def: "Mutilated, marred, disfigured", type: "Adjective" },
        { word: "mewling", def: "Whimpering, crying weakly like an infant", type: "Adjective" },
        { word: "paunchy", def: "Pot-bellied, grossly corpulent", type: "Adjective" },
        { word: "peevish", def: "Fretful, obstinate, childishly irritable", type: "Adjective" },
        { word: "pernicious", def: "Highly destructive, deadly, wicked", type: "Adjective" },
        { word: "privy-grobbling", def: "Secretly groping in dark corners", type: "Adjective" },
        { word: "rank", def: "Foul-smelling, offensive, corrupt", type: "Adjective" },
        { word: "reeky", def: "Foul-smelling, smoky, rancid", type: "Adjective" },
        { word: "roguish", def: "Knavish, dishonest, mischievous", type: "Adjective" },
        { word: "ruttish", def: "Lustful, sexually aggressive", type: "Adjective" },
        { word: "saucy", def: "Bold, impudent, flippant", type: "Adjective" },
        { word: "spleeny", def: "Irritable, spiteful, ill-humored", type: "Adjective" },
        { word: "spongy", def: "Drunken, soaking up liquor like a sponge", type: "Adjective" },
        { word: "surly", def: "Churlishly morose, bad-tempered", type: "Adjective" },
        { word: "unmuzzled", def: "Unrestrained, loose-mouthed, barking", type: "Adjective" },
        { word: "vain", def: "Empty, worthless, conceited", type: "Adjective" },
        { word: "venomed", def: "Poisonous, spiteful, toxic", type: "Adjective" },
        { word: "villainous", def: "Wicked, worthless, vile", type: "Adjective" },
        { word: "warped", def: "Distorted, perverse, unnatural", type: "Adjective" },
        { word: "wayward", def: "Capricious, willful, unpredictable", type: "Adjective" },
        { word: "weedy", def: "Feeble, thin, overgrown with useless weeds", type: "Adjective" },
        { word: "yeasty", def: "Frothy, superficial, trivial", type: "Adjective" }
    ];

    const col2Words = [
        { word: "base-court", def: "Lowly, suitable only for the lower courtyard", type: "Modifier" },
        { word: "bat-fowling", def: "Catching birds at night with lights (gullible)", type: "Modifier" },
        { word: "beef-witted", def: "Dull-brained, having the intelligence of an ox", type: "Modifier" },
        { word: "beetle-headed", def: "Heavy-headed, stupid, slow", type: "Modifier" },
        { word: "boil-brained", def: "Hot-headed, diseased in thought", type: "Modifier" },
        { word: "clapper-clawed", def: "Scolded, mauled, scratched up", type: "Modifier" },
        { word: "clay-brained", def: "Dull, heavy-witted, dense as mud", type: "Modifier" },
        { word: "common-kissing", def: "Touching anything indiscriminately", type: "Modifier" },
        { word: "crook-dated", def: "Expired, past usefulness, decrepit", type: "Modifier" },
        { word: "dizzy-eyed", def: "Confused, lacking clear vision", type: "Modifier" },
        { word: "dogfox", def: "Sly, treacherous male fox", type: "Modifier" },
        { word: "dread-bolted", def: "Fearing lightnings or thunderbolts", type: "Modifier" },
        { word: "earth-vexing", def: "Troubling the peaceful earth with foolishness", type: "Modifier" },
        { word: "elf-skinned", def: "Shrivelled, thin-skinned, hollow", type: "Modifier" },
        { word: "fat-folded", def: "Encased in thick layers of sluggish fat", type: "Modifier" },
        { word: "flap-mouthed", def: "Having broad dangling lips, talkative", type: "Modifier" },
        { word: "fly-bitten", def: "Nibbled and ruined by flies", type: "Modifier" },
        { word: "folly-fallen", def: "Fallen into utter foolishness", type: "Modifier" },
        { word: "fool-born", def: "Begotten of foolish parents", type: "Modifier" },
        { word: "guts-griping", def: "Causing bellyaches and internal pain", type: "Modifier" },
        { word: "half-faced", def: "Wretched, thin, having a half-profile look", type: "Modifier" },
        { word: "hasty-witted", def: "Rash, acting without thinking", type: "Modifier" },
        { word: "hedge-born", def: "Born under a hedge (illegitimate, low-class)", type: "Modifier" },
        { word: "hell-hated", def: "Hated even by the underworld", type: "Modifier" },
        { word: "idle-headed", def: "Foolish, senseless, thoughtless", type: "Modifier" },
        { word: "ill-nurtured", def: "Badly brought up, rude, untaught", type: "Modifier" },
        { word: "knotty-pated", def: "Blockheaded, thick-skulled", type: "Modifier" },
        { word: "lumpish-headed", def: "Dull, heavy, lacking quickness", type: "Modifier" },
        { word: "malt-wormy", def: "Drunken, infested with beer maggots", type: "Modifier" },
        { word: "motley-minded", def: "Foolish-minded, wearing a jester's coat mentally", type: "Modifier" },
        { word: "pigeon-livered", def: "Gentle to a fault, timid, lacking gall", type: "Modifier" },
        { word: "pox-marked", def: "Scarred by disease, pitted", type: "Modifier" },
        { word: "raw-boned", def: "Gaunt, thin, bony and awkward", type: "Modifier" },
        { word: "reeky-cheeked", def: "Smoky-faced, filthy-visaged", type: "Modifier" },
        { word: "roguish-thoughted", def: "Harboring treacherous, knavish thoughts", type: "Modifier" },
        { word: "rump-fed", def: "Fed on offal or pampered with cheap cuts", type: "Modifier" },
        { word: "shard-borne", def: "Carried on dung-beetle wings", type: "Modifier" },
        { word: "sheep-biting", def: "Sneaky, malicious, thief-like", type: "Modifier" },
        { word: "spur-galled", def: "Chafed by spurs, overworked, worn out", type: "Modifier" },
        { word: "swag-bellied", def: "Pendulous-bellied, sagging with grease", type: "Modifier" },
        { word: "tardy-gated", def: "Slow-moving, sluggish of gait", type: "Modifier" },
        { word: "tickle-brained", def: "Giddy, easily amused, shallow", type: "Modifier" },
        { word: "toad-spotted", def: "Spotted with venom and corruption like a toad", type: "Modifier" },
        { word: "urchin-snouted", def: "Having a pointed snout like a hedgehog", type: "Modifier" },
        { word: "weather-bitten", def: "Torn and defaced by bad weather", type: "Modifier" }
    ];

    const col3Words = [
        { word: "apple-john", def: "A withered, shriveled winter apple", type: "Noun" },
        { word: "baggage", def: "A worthless, worthless person or woman", type: "Noun" },
        { word: "barnacle", def: "A parasite, clammy shellfish adhering to ships", type: "Noun" },
        { word: "bladder", def: "A hollow, swollen bag filled with wind", type: "Noun" },
        { word: "boar-pig", def: "A young uncastrated swine", type: "Noun" },
        { word: "bugbear", def: "An imaginary monster used to frighten children", type: "Noun" },
        { word: "bum-bailey", def: "A sheriff's officer of the lowest order", type: "Noun" },
        { word: "canker-blossom", def: "A worm that destroys the blossom of love", type: "Noun" },
        { word: "clack-dish", def: "A wooden dish with a noisy lid used by beggars", type: "Noun" },
        { word: "clotpole", def: "A thick wooden block, a stupid blockhead", type: "Noun" },
        { word: "codpiece", def: "An ornamental pouch worn over the groin", type: "Noun" },
        { word: "coxcomb", def: "A foolish, vain person; a fool's cap", type: "Noun" },
        { word: "death-token", def: "A plague spot signaling imminent death", type: "Noun" },
        { word: "dewberry", def: "A low-growing wild blackberry", type: "Noun" },
        { word: "flap-dragon", def: "A small burning object snapped out of wine", type: "Noun" },
        { word: "flax-wench", def: "A low woman who spins flax; a harlot", type: "Noun" },
        { word: "flirt-gill", def: "A light, flirting, wanton woman", type: "Noun" },
        { word: "foot-licker", def: "A slavish flatterer, bootlicker", type: "Noun" },
        { word: "fustilarian", def: "A low, fat, smelly person", type: "Noun" },
        { word: "giglet", def: "A wanton, giddy, laughing girl", type: "Noun" },
        { word: "gudgeon", def: "A gullible fish easily caught on any bait", type: "Noun" },
        { word: "haggard", def: "An untamed, wild hawk impossible to train", type: "Noun" },
        { word: "harpy", def: "A ravenous, foul monster", type: "Noun" },
        { word: "hedge-pig", def: "A hedgehog, spiky nuisance", type: "Noun" },
        { word: "horn-beast", def: "A horned animal or cuckold", type: "Noun" },
        { word: "hugger-mugger", def: "Secrecy, confusion, disorderly conduct", type: "Noun" },
        { word: "jolthead", def: "A blockhead, heavy dunce", type: "Noun" },
        { word: "lewdster", def: "A profligate, lustful person", type: "Noun" },
        { word: "lout", def: "An awkward, stupid fellow", type: "Noun" },
        { word: "maggot-pie", def: "A magpie, chattering bird", type: "Noun" },
        { word: "malt-worm", def: "A tippler, chronic drunkard", type: "Noun" },
        { word: "mammet", def: "A doll, puppet, or idol", type: "Noun" },
        { word: "measle", def: "A loathsome, spotty disease or person", type: "Noun" },
        { word: "minnow", def: "A insignificant, tiny fish", type: "Noun" },
        { word: "miscreant", def: "A villain, heretic, rogue", type: "Noun" },
        { word: "moldwarp", def: "A mole, blind earth-burrower", type: "Noun" },
        { word: "mumble-news", def: "A tale-bearer, gossip-monger", type: "Noun" },
        { word: "nut-hook", def: "A constable or thief using a hooked stick", type: "Noun" },
        { word: "pigeon-egg", def: "An insignificant, tiny egg", type: "Noun" },
        { word: "pignut", def: "An edible earthnut, worthless bulb", type: "Noun" },
        { word: "puttock", def: "A kite, scavenger bird of prey", type: "Noun" },
        { word: "pumpion", def: "A pumpkin; a large, fat, useless fellow", type: "Noun" },
        { word: "ratsbane", def: "Rat poison; a poisonous rascal", type: "Noun" },
        { word: "scut", def: "A short, stubby tail of a hare", type: "Noun" },
        { word: "skainsmate", def: "A companion in knavery; cutthroat pal", type: "Noun" },
        { word: "strumpet", def: "A harlot, deceitful woman", type: "Noun" },
        { word: "varlet", def: "A scoundrel, rogue, menial servant", type: "Noun" },
        { word: "vassal", def: "A humble servant, dependant", type: "Noun" },
        { word: "whey-face", def: "A pale, cowardly face like buttermilk", type: "Noun" },
        { word: "wagtail", def: "A wanton, restless bird", type: "Noun" }
    ];

const mildWords = new Set([
        'artless', 'bootless', 'cockered', 'cloutish', 'fawning', 'frothy', 'gleeking', 'lumpish', 'mammering', 'mewling', 'peevish', 'saucy', 'vain', 'weedy', 'yeasty',
        'base-court', 'bat-fowling', 'beef-witted', 'beetle-headed', 'clay-brained', 'dizzy-eyed', 'flap-mouthed', 'fool-born', 'half-faced', 'idle-headed', 'lumpish-headed', 'motley-minded', 'pigeon-livered', 'tardy-gated', 'tickle-brained',
        'apple-john', 'barnacle', 'bladder', 'bugbear', 'clack-dish', 'clotpole', 'coxcomb', 'dewberry', 'gudgeon', 'hedge-pig', 'jolthead', 'lout', 'minnow', 'pigeon-egg', 'pignut', 'pumpion', 'wagtail'
    ]);

    const lethalWords = new Set([
        'craven', 'dissembling', 'gorbellied', 'infectious', 'mangled', 'pernicious', 'privy-grobbling', 'rank', 'reeky', 'ruttish', 'spleeny', 'venomed', 'villainous', 'warped',
        'boil-brained', 'dread-bolted', 'earth-vexing', 'fat-folded', 'guts-griping', 'hell-hated', 'malt-wormy', 'pox-marked', 'reeky-cheeked', 'rump-fed', 'shard-borne', 'sheep-biting', 'toad-spotted',
        'baggage', 'canker-blossom', 'death-token', 'flax-wench', 'foot-licker', 'fustilarian', 'harpy', 'horn-beast', 'lewdster', 'measle', 'miscreant', 'ratsbane', 'strumpet', 'varlet'
    ]);

    const intensityConfig = {
        mild: {
            intro: target => target ? 'Thou ' + target + ', thou' : 'Thou',
            closing: 'Prithee, trouble us no more.'
        },
        spicy: {
            intro: target => target ? 'Fie, ' + target + '! Thou' : 'Fie! Thou',
            closing: 'Begone, before thy folly becomes contagious.'
        },
        lethal: {
            intro: target => target ? 'Out, ' + target + '! Thou most accursed' : 'Out! Thou most accursed',
            closing: 'Even Hell itself would spit thee back.'
        }
    };

    const targetInput = document.getElementById('target-name-input');
    const intensityButtons = document.querySelectorAll('.intensity-button');
    const wordButtons = document.querySelectorAll('.word-button');
    const insultIntro = document.getElementById('insult-intro');
    const insultClosing = document.getElementById('insult-closing');
    const definitionList = document.getElementById('definition-list');
    const statusMessage = document.getElementById('status-message');
    const favoritesPanel = document.getElementById('favorites-panel');
    const favoritesList = document.getElementById('favorites-list');
    const favoritesCount = document.getElementById('favorites-count');
    const definitionDialog = document.getElementById('definition-dialog');

    let currentIntensity = 'mild';
    let currentWords = [null, null, null];
    let lockedSlots = [false, false, false];
    let soundEnabled = true;
    let audioContext = null;
    let favorites = [];

    try {
        favorites = JSON.parse(localStorage.getItem('bard_favs') || '[]');
    } catch {
        favorites = [];
    }

    function getPool(words) {
        if (currentIntensity === 'mild') {
            return words.filter(item => mildWords.has(item.word));
        }

        if (currentIntensity === 'lethal') {
            return words.filter(item => lethalWords.has(item.word));
        }

        return words.filter(item => !mildWords.has(item.word) && !lethalWords.has(item.word));
    }

    function pickRandom(words) {
        return words[Math.floor(Math.random() * words.length)];
    }

    function playGenerateSound() {
        if (!soundEnabled) return;

        try {
            audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gain = audioContext.createGain();
            const now = audioContext.currentTime;

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(440, now);
            oscillator.frequency.exponentialRampToValueAtTime(660, now + 0.12);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            oscillator.connect(gain);
            gain.connect(audioContext.destination);
            oscillator.start(now);
            oscillator.stop(now + 0.2);
        } catch {
            // Audio is an enhancement; generation should still work without it.
        }
    }

    function buildInsult() {
        const config = intensityConfig[currentIntensity];
        const intro = config.intro(targetInput.value.trim());
        const words = currentWords.map(item => item.word).join(' ');
        return intro + ' ' + words + '! ' + config.closing;
    }

    function showStatus(message) {
        statusMessage.textContent = message;
        window.clearTimeout(showStatus.timeout);
        showStatus.timeout = window.setTimeout(() => {
            statusMessage.textContent = '';
        }, 2200);
    }

    function openDefinition(word) {
        document.getElementById('dialog-type').textContent = word.type;
        document.getElementById('dialog-word').textContent = word.word;
        document.getElementById('dialog-definition').textContent = word.def;
        definitionDialog.showModal();
    }

    function renderInsult() {
        const config = intensityConfig[currentIntensity];
        insultIntro.textContent = config.intro(targetInput.value.trim()) + '…';
        insultClosing.textContent = '— ' + config.closing;

        wordButtons.forEach((button, index) => {
            const word = currentWords[index];
            button.textContent = word.word;
            button.setAttribute('aria-label', (lockedSlots[index] ? 'Unlock ' : 'Lock ') + word.word);
            button.setAttribute('aria-pressed', String(lockedSlots[index]));
        });

        definitionList.innerHTML = '';
        currentWords.forEach(word => {
            const button = document.createElement('button');
            button.className = 'definition-chip';
            button.type = 'button';
            button.textContent = word.word + ': ' + word.def;
            button.addEventListener('click', () => openDefinition(word));
            definitionList.appendChild(button);
        });
    }

    function generateInsult() {
        const columns = [col1Words, col2Words, col3Words];

        currentWords = currentWords.map((word, index) => {
            if (lockedSlots[index] && word) return word;
            return pickRandom(getPool(columns[index]));
        });

        renderInsult();
        playGenerateSound();
    }

    async function copyText(text) {
        try {
            await navigator.clipboard.writeText(text);
            showStatus('Copied to clipboard.');
        } catch {
            showStatus('Could not copy. Select the text and copy it manually.');
        }
    }

    function saveFavorites() {
        localStorage.setItem('bard_favs', JSON.stringify(favorites));
        renderFavorites();
    }

    function renderFavorites() {
        favoritesCount.textContent = favorites.length;
        favoritesList.innerHTML = '';

        if (favorites.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-message';
            empty.textContent = 'No saved insults yet.';
            favoritesList.appendChild(empty);
            return;
        }

        favorites.forEach((text, index) => {
            const item = document.createElement('article');
            item.className = 'favorite-item';

            const copy = document.createElement('p');
            copy.textContent = text;

            const actions = document.createElement('div');
            actions.className = 'favorite-actions';

            const copyButton = document.createElement('button');
            copyButton.type = 'button';
            copyButton.textContent = 'Copy';
            copyButton.addEventListener('click', () => copyText(text));

            const removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                favorites.splice(index, 1);
                saveFavorites();
                showStatus('Removed from saved insults.');
            });

            actions.append(copyButton, removeButton);
            item.append(copy, actions);
            favoritesList.appendChild(item);
        });
    }

    function downloadCard() {
        const canvas = document.getElementById('download-canvas');
        const context = canvas.getContext('2d');
        const dark = document.body.classList.contains('dark');
        const insult = buildInsult();

        canvas.width = 1200;
        canvas.height = 630;
        context.fillStyle = dark ? '#18181b' : '#f7f7f5';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = dark ? '#3f3f46' : '#d4d4d8';
        context.lineWidth = 2;
        context.strokeRect(48, 48, 1104, 534);

        context.fillStyle = dark ? '#a99dfd' : '#6d5dfc';
        context.font = '600 24px system-ui, sans-serif';
        context.fillText('SHAKESPEAREAN INSULT', 90, 115);

        context.fillStyle = dark ? '#f4f4f5' : '#18181b';
        context.font = '42px Georgia, serif';

        const words = insult.split(' ');
        const lines = [];
        let line = '';

        words.forEach(word => {
            const candidate = line ? line + ' ' + word : word;
            if (context.measureText(candidate).width > 1000) {
                lines.push(line);
                line = word;
            } else {
                line = candidate;
            }
        });
        if (line) lines.push(line);

        lines.slice(0, 5).forEach((text, index) => {
            context.fillText(text, 90, 215 + index * 68);
        });

        const link = document.createElement('a');
        link.download = 'shakespearean-insult.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        showStatus('Image downloaded.');
    }

    intensityButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentIntensity = button.dataset.level;
            intensityButtons.forEach(option => {
                const active = option === button;
                option.classList.toggle('active', active);
                option.setAttribute('aria-pressed', String(active));
            });
            generateInsult();
        });
    });

    wordButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            lockedSlots[index] = !lockedSlots[index];
            renderInsult();
            showStatus(lockedSlots[index] ? 'Word locked.' : 'Word unlocked.');
        });
    });

    targetInput.addEventListener('input', renderInsult);
    document.getElementById('generate-btn').addEventListener('click', generateInsult);
    document.getElementById('copy-btn').addEventListener('click', () => copyText(buildInsult()));
    document.getElementById('download-btn').addEventListener('click', downloadCard);

    document.getElementById('save-btn').addEventListener('click', () => {
        const insult = buildInsult();
        if (favorites.includes(insult)) {
            showStatus('This insult is already saved.');
            return;
        }
        favorites.push(insult);
        saveFavorites();
        showStatus('Insult saved.');
    });

    document.getElementById('favorites-toggle-btn').addEventListener('click', () => {
        favoritesPanel.hidden = !favoritesPanel.hidden;
    });
    document.getElementById('favorites-close-btn').addEventListener('click', () => {
        favoritesPanel.hidden = true;
    });

    document.getElementById('sound-toggle-btn').addEventListener('click', event => {
        soundEnabled = !soundEnabled;
        event.currentTarget.textContent = soundEnabled ? 'Sound on' : 'Sound off';
        event.currentTarget.setAttribute('aria-pressed', String(soundEnabled));
        showStatus(soundEnabled ? 'Sound enabled.' : 'Sound muted.');
    });

    const themeButton = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('bard_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeButton.textContent = 'Light mode';
    }

    themeButton.addEventListener('click', () => {
        const dark = document.body.classList.toggle('dark');
        themeButton.textContent = dark ? 'Light mode' : 'Dark mode';
        localStorage.setItem('bard_theme', dark ? 'dark' : 'light');
    });

    document.getElementById('dialog-close-btn').addEventListener('click', () => definitionDialog.close());
    definitionDialog.addEventListener('click', event => {
        if (event.target === definitionDialog) definitionDialog.close();
    });

    generateInsult();
    renderFavorites();
});
