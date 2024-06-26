function moduleProject3() {

    const section = document.querySelector('section')
    // 👉 TASK 1 - Write a `buildNav` component that returns a nav

    function buildNav(links) {
        const nav = document.createElement('nav')
        links.forEach(({ href, textContent, title }) => {
            const a = document.createElement('a')
            a.href = href
            a.textContent = textContent
            a.title = title
            nav.appendChild(a)
        })
        return nav
    }

    // ❗ DOM creation using your `buildNav` component (do not change):
    document.querySelector('header').appendChild(buildNav([
        { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
        { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
        { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
        { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
        { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
    ]))

    // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

    function buildLearnerCard(learner, languages) {
        const card = document.createElement('div')
        card.classList.add('learner-card')
        const { id, fullName, dateOfBirth, favLanguage } = learner
        const faveLang = languages.find(lang => lang.id === favLanguage).name
        const buildSentences = txt => {
            const p = document.createElement('p')
            p.textContent = txt
            card.appendChild(p)
        }
        buildSentences(fullName)
        buildSentences(`Learner ID: ${id}`)
        buildSentences(`Date of Birth: ${dateOfBirth}`)
        buildSentences(`Favorite Language: ${faveLang}`)
        card.addEventListener('click', () => {
            if (activeCard) activeCard.classList.remove('active')
            card.classList.add('active')
            activeCard = card
        })

        return card
    }
    let activeCard
    {
        // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

        let languages = [
            { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
            { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
            { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
            { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
            { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
        ]
        let learners = [
            { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
            { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
            { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
            { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
            { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
        ]

        learners.forEach(learner => {
            const card = buildLearnerCard(learner, languages)
            section.appendChild(card)
        })
    }

    // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

    function buildFooter(footerData) {
        const { companyName, address, contactEmail, socialMedia } = footerData
        const { twitter, facebook, instagram } = socialMedia
        const footer = document.createElement('footer')

        const populateDiv = ({ parentDiv, tagName, txt, tagClass, href, child }) => {
            const tag = document.createElement(tagName)
            tag.textContent = txt
            if (tagClass) tag.classList.add(tagClass)
            if (href) tag.href = href
            if (child) tag.appendChild(child)
            parentDiv.appendChild(tag)
        }

        // create company div
        const divComp = document.createElement('div')
        divComp.classList.add('company-info')
        // create company children
        populateDiv({ parentDiv: divComp, tagName: 'p', txt: companyName, tagClass: 'company-name' })
        populateDiv({ parentDiv: divComp, tagName: 'p', txt: address, tagClass: 'address' })
        const aEmail = document.createElement('a')
        aEmail.href = `mailto:${contactEmail}`
        aEmail.textContent = ` ${contactEmail}`
        populateDiv({ parentDiv: divComp, tagName: 'p', txt: 'Email: ', tagClass: 'contact-email', child: aEmail })
        // create social div
        const divSocial = document.createElement('div')
        divSocial.classList.add('social-media')
        // create social children
        populateDiv({ parentDiv: divSocial, tagName: 'a', txt: 'Twitter', href: twitter })
        populateDiv({ parentDiv: divSocial, tagName: 'a', txt: 'Facebook', href: facebook })
        populateDiv({ parentDiv: divSocial, tagName: 'a', txt: 'Instagram', href: instagram })

        //create copywrite div
        const divCopywrite = document.createElement('div')
        divCopywrite.textContent = '© BLOOM INSTITUTE OF TECHNOLOGY 2024'

        // append divs
        footer.appendChild(divComp)
        footer.appendChild(divSocial)
        footer.appendChild(divCopywrite)
        return footer
    }

    // ❗ DOM creation using your `buildFooter` component (do not change):
    document.body.appendChild(buildFooter({
        companyName: 'Bloom Institute of Technology',
        address: '123 Main Street, City, Country',
        contactEmail: 'info@example.com',
        socialMedia: {
            twitter: 'https://twitter.com/example',
            facebook: 'https://www.facebook.com/example',
            instagram: 'https://www.instagram.com/example',
        },
    }))

    // 👉 TASK 4 - Clicking on the section should deactivate the active card
    section.addEventListener('click', evt => {
        if (evt.target === section && activeCard) {
            activeCard.classList.remove('active')
            activeCard = null
        }
    })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
