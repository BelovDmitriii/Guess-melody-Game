import request from 'axios';
import { ErrorType } from '../types/error';
import { toast } from 'react-toastify';
import { HTTP_CODE } from '../const';

export const errorsHandle = (error: ErrorType) => {
  if(!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if(response) {
    switch(response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.error(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        toast.info(response.data.error);
        break;
    }
  }
};
