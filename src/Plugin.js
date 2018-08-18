import Plugin from '@chakrajs/plugin-interface'

/**
 * Empty Chakra Plugin
 */
export default class EmptyPlugin extends Plugin {
  /**
   * Create a new plugin instance.
   * @param {Object} [options = {}] Configuration for the plugin
   */
  constructor (options = {}) {
    super()

    this.name = 'EmptyPlugin'
    this.actions = new Map()
    this.subscriptions = new Set()
  }

  /**
   * Start the plugin. Would be called when the plugin is registered.
   * @returns {undefined}
   * @throws {Error} Will throw if plugin initialization failed
   */
  start () { }

  /**
   * Called when a new message arrives from a subscription
   * @param {String} subscription Name of the subscription that published the message
   * @param {String} message JSON message object sent from the subscription
   * @return {undefined}
   */
  handleMessage (subscription, message) {}
}
