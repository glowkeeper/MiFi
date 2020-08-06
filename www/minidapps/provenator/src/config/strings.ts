class App {

  static readonly title='Minima'
  static readonly tagline=''
  static readonly copyright='© Copyright 2020 Minima GmbH'
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

    static readonly required = "Required"
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

  static readonly heading = 'About Provenator'

  static readonly info = `**Provenator** version 0.1.0.<br /><br />Created by _${App.author}_`

}

class Help {

  static readonly heading = 'Provenator Help'

  static readonly info = `I need some too`
}

class Faq {

  static readonly heading = 'FAQ'

  static readonly info = `Coming soon`
}

class Contact {

  static readonly heading = 'Contact'

  static readonly info = `a dot person at minima dot global`
}

class File {

    static readonly headingFile = "Hash a File"
    static readonly getFile = "Get File"
    static readonly fileTip = "Select a file to be hashed"
    static readonly fileName = "Filename"
    static readonly hash = "Hash"
    static readonly submitTip = "Submit the hash of the file to the Minima blockchain"

    static readonly addFileButton = "Submit to Minima"
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
