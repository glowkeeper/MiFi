class App {

  static readonly title='Zeus Ecosphere Ltd'
  static readonly tagline=''
  static readonly copyright='© Copyright 2020 Zeus Ecosphere Ltd'
  static readonly author='[Steven Huckle](https://glowkeeper.github.io/)'
}

class Paths {

  // AppBar
  static readonly home = 'Home'
  static readonly blockchain = 'Blockchain'
  static readonly about = 'About'
  static readonly help = 'Help'
  static readonly faq = 'FAQ'
  static readonly contact = 'Contact'

  static readonly file = 'File'
}

class GeneralError {

    static readonly errorRequired = "Required"
}

class Transaction {

    static readonly pending = "Please wait - transaction is pending"
    static readonly success = "Submitted successfully"
    static readonly failure = 'Submission failure'

    static readonly errorGettingData = "Error getting data"
}

class Home {

  static readonly heading = 'Home'

  static readonly info = `Every new website should start with \"Hello World!\"`
}

class About {

  static readonly heading = 'About Zeus Ecosphere Ltd'

  static readonly info = `**Zeus Ecosphere** version 0.0.1.<br /><br />Created by _${App.author}_`

}

class Help {

  static readonly heading = 'Zeus Ecosphere Help'

  static readonly info = `I need some too`
}

class Faq {

  static readonly heading = 'FAQ'

  static readonly info = `Coming soon`
}

class Contact {

  static readonly heading = 'Contact'

  static readonly info = `a dot person at zeus dot com`
}

class File {

    static readonly headingFile = "File"
    static readonly FileDetails = "Details"
}

export { App,
         Paths,
         GeneralError,
         Transaction,
         Home,
         About,
         Help,
         Faq,
         Contact,
         File
       }
