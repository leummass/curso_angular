import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase/auth';

@Injectable()
export class LoginService{
    constructor(private router: Router){
        
    }
    token: string;
    login(email:string,password:string){
        const auth = firebase.getAuth();
        firebase.signInWithEmailAndPassword(auth,email,password)
        .then(
            response => {
                firebase.getAuth().currentUser?.getIdToken().then(
                    token => {
                        this.token=token;
                        this.router.navigate(['/'])
                    }
                )
            }
        )
    }

    getIdToken(){
        return this.token;
    }
}