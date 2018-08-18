/* eslint-env mocha */
'use strict'
const Plugin = require('@chakrajs/plugin-interface')
const TestPlugin = require('../dist/plugin.min')

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

describe('Plugin', () => {
  let plugin

  beforeEach((done) => {
    // Setup stuff here
    plugin = new TestPlugin()

    done()
  })

  it('gets exported correctly', () => {
    expect(TestPlugin).to.exist()
  })

  it('extends Chakra Plugin Interface', () => {
    expect(plugin).to.exist()
    expect(plugin instanceof Plugin).to.be.eql(true)
  })

  // Add more tests here
})
