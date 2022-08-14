import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from './axios.http-client'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  data: {
    name: faker.name.firstName()
  },
  status: faker.random.numeric(3)
}

mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: {
      name: faker.name.firstName()
    }
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct status code and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())

    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
