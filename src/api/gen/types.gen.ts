// This file is auto-generated by @hey-api/openapi-ts

export type HealthCheckDto = {
  status: {
    [key: string]: unknown
  }
  details: {
    [key: string]: unknown
  }
}

export type ErrorDetailDto = {
  property?: string
  code: string
  message: string
}

export type ErrorDto = {
  statusCode: number
  error: string
  message: string
  errorCode?: string
  details?: Array<ErrorDetailDto>
}

export type UserDto = {
  id: string
  role: 'User' | 'Admin'
  username: string
  email: string
  firstName?: string
  lastName?: string
  image?: string
  createdAt: string
  updatedAt: string
  bio?: string
}

export type OffsetPaginationDto = {
  limit: number
  currentPage: number
  nextPage: number
  previousPage: number
  totalRecords: number
  totalPages: number
}

export type OffsetPaginatedDto = {
  data: Array<Array<unknown>>
  pagination: OffsetPaginationDto
}

export type OffsetPaginatedUserDto = {
  data: Array<UserDto>
  pagination: OffsetPaginationDto
}

export type CursorPaginationDto = {
  limit: number
  afterCursor: string
  beforeCursor: string
  totalRecords: number
}

export type CursorPaginatedDto = {
  data: Array<Array<unknown>>
  pagination: CursorPaginationDto
}

export type CursorPaginatedUserDto = {
  data: Array<UserDto>
  pagination: CursorPaginationDto
}

export type UpdateUserProfileDto = {
  username?: string
  firstName?: string | null
  lastName?: string | null
  image?: string | null
}

export type FileDto = {
  originalname: string
  filename: string
  mimetype: string
  size: string
  path: string
}

export type PrometheusControllerIndexData = {
  body?: never
  path?: never
  query?: never
  url: '/api/metrics'
}

export type PrometheusControllerIndexResponses = {
  200: unknown
}

export type HealthControllerCheckData = {
  body?: never
  path?: never
  query?: never
  url: '/api/health'
}

export type HealthControllerCheckErrors = {
  404: ErrorDto
  /**
   * The Health Check is not successful
   */
  503: {
    status?: string
    info?: {
      [key: string]: {
        status: string
        [key: string]: unknown | string
      }
    } | null
    error?: {
      [key: string]: {
        status: string
        [key: string]: unknown | string
      }
    } | null
    details?: {
      [key: string]: {
        status: string
        [key: string]: unknown | string
      }
    }
  }
}

export type HealthControllerCheckError =
  HealthControllerCheckErrors[keyof HealthControllerCheckErrors]

export type HealthControllerCheckResponses = {
  200: HealthCheckDto
}

export type HealthControllerCheckResponse =
  HealthControllerCheckResponses[keyof HealthControllerCheckResponses]

export type UserControllerGetCurrentUserData = {
  body?: never
  path?: never
  query?: never
  url: '/api/v1/user/whoami'
}

export type UserControllerGetCurrentUserErrors = {
  /**
   * Bad Request
   */
  400: ErrorDto
  /**
   * Unauthorized
   */
  401: ErrorDto
  /**
   * Forbidden
   */
  403: ErrorDto
  /**
   * Not Found
   */
  404: ErrorDto
  /**
   * Unprocessable Entity
   */
  422: ErrorDto
  /**
   * Internal Server Error
   */
  500: ErrorDto
}

export type UserControllerGetCurrentUserError =
  UserControllerGetCurrentUserErrors[keyof UserControllerGetCurrentUserErrors]

export type UserControllerGetCurrentUserResponses = {
  /**
   * OK
   */
  200: UserDto
}

export type UserControllerGetCurrentUserResponse =
  UserControllerGetCurrentUserResponses[keyof UserControllerGetCurrentUserResponses]

export type UserControllerFindAllUsersData = {
  body?: never
  path?: never
  query?: {
    limit?: number
    page?: number
    q?: string
    order?: 'asc' | 'desc'
  }
  url: '/api/v1/user/all'
}

export type UserControllerFindAllUsersErrors = {
  /**
   * Bad Request
   */
  400: ErrorDto
  /**
   * Unauthorized
   */
  401: ErrorDto
  /**
   * Forbidden
   */
  403: ErrorDto
  /**
   * Not Found
   */
  404: ErrorDto
  /**
   * Unprocessable Entity
   */
  422: ErrorDto
  /**
   * Internal Server Error
   */
  500: ErrorDto
}

export type UserControllerFindAllUsersError =
  UserControllerFindAllUsersErrors[keyof UserControllerFindAllUsersErrors]

export type UserControllerFindAllUsersResponses = {
  /**
   * OK
   */
  200: OffsetPaginatedDto & {
    data?: Array<OffsetPaginatedUserDto>
  }
}

export type UserControllerFindAllUsersResponse =
  UserControllerFindAllUsersResponses[keyof UserControllerFindAllUsersResponses]

export type UserControllerFindAllUsersCursorData = {
  body?: never
  path?: never
  query?: {
    afterCursor?: string
    beforeCursor?: string
    limit?: number
    q?: string
  }
  url: '/api/v1/user/all/cursor'
}

export type UserControllerFindAllUsersCursorErrors = {
  /**
   * Bad Request
   */
  400: ErrorDto
  /**
   * Unauthorized
   */
  401: ErrorDto
  /**
   * Forbidden
   */
  403: ErrorDto
  /**
   * Not Found
   */
  404: ErrorDto
  /**
   * Unprocessable Entity
   */
  422: ErrorDto
  /**
   * Internal Server Error
   */
  500: ErrorDto
}

export type UserControllerFindAllUsersCursorError =
  UserControllerFindAllUsersCursorErrors[keyof UserControllerFindAllUsersCursorErrors]

export type UserControllerFindAllUsersCursorResponses = {
  /**
   * OK
   */
  200: CursorPaginatedDto & {
    data?: Array<CursorPaginatedUserDto>
  }
}

export type UserControllerFindAllUsersCursorResponse =
  UserControllerFindAllUsersCursorResponses[keyof UserControllerFindAllUsersCursorResponses]

export type UserControllerDeleteUserData = {
  body?: never
  path: {
    id: string
  }
  query?: never
  url: '/api/v1/user/{id}'
}

export type UserControllerDeleteUserErrors = {
  /**
   * Bad Request
   */
  400: ErrorDto
  /**
   * Unauthorized
   */
  401: ErrorDto
  /**
   * Forbidden
   */
  403: ErrorDto
  /**
   * Not Found
   */
  404: ErrorDto
  /**
   * Internal Server Error
   */
  500: ErrorDto
}

export type UserControllerDeleteUserError =
  UserControllerDeleteUserErrors[keyof UserControllerDeleteUserErrors]

export type UserControllerDeleteUserResponses = {
  /**
   * OK
   */
  200: unknown
}

export type UserControllerFindUserData = {
  body?: never
  path: {
    id: string
  }
  query?: never
  url: '/api/v1/user/{id}'
}

export type UserControllerFindUserErrors = {
  /**
   * Bad Request
   */
  400: ErrorDto
  /**
   * Unauthorized
   */
  401: ErrorDto
  /**
   * Forbidden
   */
  403: ErrorDto
  /**
   * Not Found
   */
  404: ErrorDto
  /**
   * Unprocessable Entity
   */
  422: ErrorDto
  /**
   * Internal Server Error
   */
  500: ErrorDto
}

export type UserControllerFindUserError =
  UserControllerFindUserErrors[keyof UserControllerFindUserErrors]

export type UserControllerFindUserResponses = {
  /**
   * OK
   */
  200: UserDto
}

export type UserControllerFindUserResponse =
  UserControllerFindUserResponses[keyof UserControllerFindUserResponses]

export type UserControllerUpdateUserProfileData = {
  body: UpdateUserProfileDto
  path?: never
  query?: never
  url: '/api/v1/user/profile'
}

export type UserControllerUpdateUserProfileErrors = {
  /**
   * Bad Request
   */
  400: ErrorDto
  /**
   * Unauthorized
   */
  401: ErrorDto
  /**
   * Forbidden
   */
  403: ErrorDto
  /**
   * Not Found
   */
  404: ErrorDto
  /**
   * Unprocessable Entity
   */
  422: ErrorDto
  /**
   * Internal Server Error
   */
  500: ErrorDto
}

export type UserControllerUpdateUserProfileError =
  UserControllerUpdateUserProfileErrors[keyof UserControllerUpdateUserProfileErrors]

export type UserControllerUpdateUserProfileResponses = {
  /**
   * OK
   */
  200: UserDto
}

export type UserControllerUpdateUserProfileResponse =
  UserControllerUpdateUserProfileResponses[keyof UserControllerUpdateUserProfileResponses]

export type FileControllerUploadFileData = {
  body: {
    file?: Blob | File
  }
  path?: never
  query?: never
  url: '/api/v1/file/upload/single'
}

export type FileControllerUploadFileErrors = {
  /**
   * Bad Request
   */
  400: ErrorDto
  /**
   * Unauthorized
   */
  401: ErrorDto
  /**
   * Forbidden
   */
  403: ErrorDto
  /**
   * Not Found
   */
  404: ErrorDto
  /**
   * Unprocessable Entity
   */
  422: ErrorDto
  /**
   * Internal Server Error
   */
  500: ErrorDto
}

export type FileControllerUploadFileError =
  FileControllerUploadFileErrors[keyof FileControllerUploadFileErrors]

export type FileControllerUploadFileResponses = {
  /**
   * OK
   */
  200: FileDto
}

export type FileControllerUploadFileResponse =
  FileControllerUploadFileResponses[keyof FileControllerUploadFileResponses]

export type FileControllerUploadFilesData = {
  body: {
    files?: Array<Blob | File>
  }
  path?: never
  query?: never
  url: '/api/v1/file/upload/multiple'
}

export type FileControllerUploadFilesErrors = {
  /**
   * Bad Request
   */
  400: ErrorDto
  /**
   * Unauthorized
   */
  401: ErrorDto
  /**
   * Forbidden
   */
  403: ErrorDto
  /**
   * Not Found
   */
  404: ErrorDto
  /**
   * Unprocessable Entity
   */
  422: ErrorDto
  /**
   * Internal Server Error
   */
  500: ErrorDto
}

export type FileControllerUploadFilesError =
  FileControllerUploadFilesErrors[keyof FileControllerUploadFilesErrors]

export type FileControllerUploadFilesResponses = {
  /**
   * OK
   */
  200: FileDto
}

export type FileControllerUploadFilesResponse =
  FileControllerUploadFilesResponses[keyof FileControllerUploadFilesResponses]

export type ClientOptions = {
  baseUrl: 'http://localhost:8000' | (string & {})
}
