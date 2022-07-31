import { HttpPostClient } from 'data/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (urlPost: string): Promise<void> {
    this.url = urlPost
    return Promise.resolve()
  }
}
