// import { Component, OnInit, OnDestroy } from '@angular/core';
// //import { CreateUserGQL } from './../../../../generated/graphql';
// import { AngularFireDatabase } from '@angular/fire/database';
// // import { Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   FormControl,
//   Validators,
// } from '@angular/forms';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { Router } from '@angular/router';
// import { from } from 'rxjs';
// import { switchMap, first, mapTo, take } from 'rxjs/operators';
// import { auth } from 'firebase/app';
// import 'firebase/auth';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit, OnDestroy {
//   constructor(
//     private auth: AngularFireAuth,
//     private router: Router,
//     private db: AngularFireDatabase,
//   ) {}

//   ngOnInit() {
//   }
//   ngOnDestroy() {
//   }
  
//   createUserViaGoogle(){
//     from(this.auth.signInWithPopup(new auth.GoogleAuthProvider()))
//     .pipe(
//       switchMap(({ user }) => this.metadataCreateWatcher(user))
//     //   ,
//     //   take(1),
//     //   switchMap((user) => from(user.getIdToken(true)).pipe(mapTo(user))),
//     //   switchMap(({ uid: uuid, displayName: fullName }) =>
//     //     this.createUserGql.mutate({ uuid, fullName })
//     //   )
//     // )
//     // .subscribe(() => this.router.navigate(['']), console.error);
//     )
//   }
  
//   private metadataCreateWatcher(user: firebase.User) {
//     return this.db
//       .object(`metadata/${user.uid}/refreshTime`)
//       .valueChanges()
//       .pipe(
//         first((refreshTime) => !!refreshTime),
//         mapTo(user)
//       );
//   }

// }

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
