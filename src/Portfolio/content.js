const content = {
  en: {
    projects: {
      finbrain: {
        name: '[Personal] - FinBrain',
        description: 'A Rails App utilizing Hotwire Turbo coupled with Stanford NLP library to read CSV provided bank statements. The app auto assigns tags like \"home depot\", or \"walmar\" to easily identify where money was spent at a granular level and provide an interface to easily view and track expenses.',
        link: 'https://github.com/EricRoos/finbrain',
      },
      datefeed: {
        name: '[Personal] - Date Feed',
        description: 'A Progressive Web App built with Ruby on Rails, GraphQL, and React/Apollo. The intention of this app was to design a backend with rails that resolves  all graphql queries via background workers. The hypothesis was the app could be scaled better by adding more workers to a pool vs more web/application servers. The app allows you to manage your profile, find people in a given radius of your geo location, and like other people posts that are in your vicinity.',
        link: 'https://github.com/EricRoos/DateFeed'
      },
      budgetr: {
        name: '[Personal] - Budgetr',
        description: 'A Web App built with Ruby on Rails and their newly introduced framework, Hotwire Turbo. The project’s intent was to build an app to collaboratively manage a budget table for purchasing items for some other home projects. The app incorporated Web Sockets and other out of box live interactive features provided by Hotwire.',
        link: 'https://github.com/EricRoos/budgetr'
      },
      dailystandup: {
        name: '[Personal] - Daily Standup',
        description: 'A Web App built with Ruby on rails and Hotwire Turbo. Goal of the project was to build a simple app that users could create teams, post updates, respond to updates and just share information. This project was more of a thought experiment on creating what I thought an ideal standup would look like in an async-first way.',
        link: 'https://github.com/EricRoos/standup'
      },
      bsReader: {
        name: '[Bookshout] - eReader',
        description: 'Using React and Rails, I built the BookShout web e-reader application that allowed customers to read their ebooks directly on our website without needing to download additional apps, tools, or the book.',
        link: 'https://bookshout.com'
      },
      bsSentences: {
        name: '[Bookshout] - Sentence Parsing',
        description: 'Using Java and an NLP library, I built a pipeline to rewrite our entire company’s library of ebooks to mark where all the sentences are in the book so that we could provide some better user features. We wanted users to be able to search for book content faster across chapters, find character references in other books, and provide a better highlighting experience during the reading session.',
        link: 'https://bookshout.com'
      }
    }
  }
}

export default content;
