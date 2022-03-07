/// <reference types="cypress" />
import {acessarUpload, realizarUpload} from './utils.upload'

it('Upload',()=>{
    acessarUpload();
    realizarUpload();
});