import{r as xt,g as No,i as Ac,b as Cc,_ as Hs,C as zs,c as wi,d as bc,e as Do,E as Ti,f as Rc,h as Nc,S as Zt,j as oe,k as Dc,q as en,L as Oo,l as ne,m as rt,F as ss,n as Oc,o as Lc,p as Pc,s as kt,t as At,v as Mc,w as xc,x as Uc}from"./index.esm2017.22ab8bcd.js";let Ls,_n=0;const K=new Array(256);for(let n=0;n<256;n++)K[n]=(n+256).toString(16).substring(1);const Fc=(()=>{const n=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(n!==void 0){if(n.randomBytes!==void 0)return n.randomBytes;if(n.getRandomValues!==void 0)return e=>{const t=new Uint8Array(e);return n.getRandomValues(t),t}}return e=>{const t=[];for(let s=e;s>0;s--)t.push(Math.floor(Math.random()*256));return t}})(),_r=4096;function Xp(){(Ls===void 0||_n+16>_r)&&(_n=0,Ls=Fc(_r));const n=Array.prototype.slice.call(Ls,_n,_n+=16);return n[6]=n[6]&15|64,n[8]=n[8]&63|128,K[n[0]]+K[n[1]]+K[n[2]]+K[n[3]]+"-"+K[n[4]]+K[n[5]]+"-"+K[n[6]]+K[n[7]]+"-"+K[n[8]]+K[n[9]]+"-"+K[n[10]]+K[n[11]]+K[n[12]]+K[n[13]]+K[n[14]]+K[n[15]]}var Vc="firebase",qc="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(Vc,qc,"app");function Ii(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Lo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $c=Lo,Po=new Ti("auth","Firebase",Lo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Oo("@firebase/auth");function Dn(n,...e){Sr.logLevel<=rt.ERROR&&Sr.error(`Auth (${Zt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(n,...e){throw Ei(n,...e)}function le(n,...e){return Ei(n,...e)}function Mo(n,e,t){const s=Object.assign(Object.assign({},$c()),{[e]:t});return new Ti("auth","Firebase",s).create(e,{appName:n.name})}function Bc(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ae(n,"argument-error"),Mo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ei(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Po.create(n,...e)}function T(n,e,...t){if(!n)throw Ei(e,...t)}function me(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Dn(e),new Error(e)}function Te(n,e){n||me(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Map;function ye(n){Te(n instanceof Function,"Expected a class definition");let e=kr.get(n);return e?(Te(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,kr.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(n,e){const t=wi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Rc(r,e!=null?e:{}))return i;ae(i,"already-initialized")}return t.initialize({options:e})}function Kc(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ye);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Gc(){return Ar()==="http:"||Ar()==="https:"}function Ar(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gc()||Nc()||"connection"in navigator)?navigator.onLine:!0}function zc(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Te(t>e,"Short delay should be less than long delay!"),this.isMobile=Ac()||Cc()}get(){return Hc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){Te(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new tn(3e4,6e4);function nn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function sn(n,e,t,s,i={}){return Uo(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=en(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),xo.fetch()(Fo(n,n.config.apiHost,t,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},r))})}async function Uo(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Wc),e);try{const i=new Xc(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Sn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sn(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Sn(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Sn(n,"user-disabled",o);const l=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Mo(n,l,c);ae(n,l)}}catch(i){if(i instanceof ss)throw i;ae(n,"network-request-failed")}}async function rn(n,e,t,s,i={}){const r=await sn(n,e,t,s,i);return"mfaPendingCredential"in r&&ae(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Fo(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?_i(n.config,i):`${n.config.apiScheme}://${i}`}class Xc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(le(this.auth,"network-request-failed")),Qc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=le(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(n,e){return sn(n,"POST","/v1/accounts:delete",e)}async function Jc(n,e){return sn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zc(n,e=!1){const t=oe(n),s=await t.getIdToken(e),i=Si(s);T(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Nt(Ps(i.auth_time)),issuedAtTime:Nt(Ps(i.iat)),expirationTime:Nt(Ps(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ps(n){return Number(n)*1e3}function Si(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Dn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lc(t);return i?JSON.parse(i):(Dn("Failed to decode base64 JWT payload"),null)}catch(i){return Dn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function el(n){const e=Si(n);return T(e,"internal-error"),T(typeof e.exp!="undefined","internal-error"),T(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ss&&tl(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function tl({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nt(this.lastLoginAt),this.creationTime=Nt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Ut(n,Jc(t,{idToken:s}));T(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?rl(r.providerUserInfo):[],a=il(n.providerData,o),u=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),l=u?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Vo(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function sl(n){const e=oe(n);await Fn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function il(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function rl(n){return n.map(e=>{var{providerId:t}=e,s=Ii(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(n,e){const t=await Uo(n,{},async()=>{const s=en({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=Fo(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xo.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken!="undefined","internal-error"),T(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):el(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await ol(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Ft;return s&&(T(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(T(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(T(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ft,this.toJSON())}_performRefresh(){return me("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){T(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Be{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=Ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Vo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ut(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Zc(this,e)}reload(){return sl(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Be(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Fn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ut(this,Yc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,u,c,l;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,A=(a=t.tenantId)!==null&&a!==void 0?a:void 0,N=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,W=(c=t.createdAt)!==null&&c!==void 0?c:void 0,U=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:ke,emailVerified:pe,isAnonymous:Ue,providerData:Et,stsTokenManager:_t}=t;T(ke&&_t,e,"internal-error");const Sc=Ft.fromJSON(this.name,_t);T(typeof ke=="string",e,"internal-error"),Ae(h,e.name),Ae(g,e.name),T(typeof pe=="boolean",e,"internal-error"),T(typeof Ue=="boolean",e,"internal-error"),Ae(p,e.name),Ae(w,e.name),Ae(A,e.name),Ae(N,e.name),Ae(W,e.name),Ae(U,e.name);const Os=new Be({uid:ke,auth:e,email:g,emailVerified:pe,displayName:h,isAnonymous:Ue,photoURL:w,phoneNumber:p,tenantId:A,stsTokenManager:Sc,createdAt:W,lastLoginAt:U});return Et&&Array.isArray(Et)&&(Os.providerData=Et.map(kc=>Object.assign({},kc))),N&&(Os._redirectEventId=N),Os}static async _fromIdTokenResponse(e,t,s=!1){const i=new Ft;i.updateFromServerResponse(t);const r=new Be({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Fn(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qo.type="NONE";const Cr=qo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(n,e,t){return`firebase:${n}:${e}:${t}`}class tt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=On(this.userKey,i.apiKey,r),this.fullPersistenceKey=On("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Be._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new tt(ye(Cr),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ye(Cr);const o=On(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const l=await c._get(o);if(l){const h=Be._fromJSON(e,l);c!==r&&(a=h),r=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new tt(r,e,s):(r=u[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new tt(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($o(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Go(e))return"Blackberry";if(Ho(e))return"Webos";if(ki(e))return"Safari";if((e.includes("chrome/")||Bo(e))&&!e.includes("edge/"))return"Chrome";if(Ko(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $o(n=ne()){return/firefox\//i.test(n)}function ki(n=ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bo(n=ne()){return/crios\//i.test(n)}function jo(n=ne()){return/iemobile/i.test(n)}function Ko(n=ne()){return/android/i.test(n)}function Go(n=ne()){return/blackberry/i.test(n)}function Ho(n=ne()){return/webos/i.test(n)}function is(n=ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function al(n=ne()){var e;return is(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ul(){return Oc()&&document.documentMode===10}function zo(n=ne()){return is(n)||Ko(n)||Ho(n)||Go(n)||/windows phone/i.test(n)||jo(n)}function cl(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n,e=[]){let t;switch(n){case"Browser":t=br(ne());break;case"Worker":t=`${br(ne())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zt}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const u=e(r);o(u)}catch(u){a(u)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t,s){this.app=e,this.heartbeatServiceProvider=t,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rr(this),this.idTokenSubscription=new Rr(this),this.beforeStateQueue=new ll(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Po,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ye(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await tt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?oe(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ye(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ye(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await tt.create(this,[ye(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return T(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(t["X-Firebase-Client"]=s),t}}function gt(n){return oe(n)}class Rr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dc(t=>this.observer=t)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function dl(n,e,t){const s=gt(n);T(s._canInitEmulator,s,"emulator-config-failed"),T(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=Qo(e),{host:o,port:a}=fl(e),u=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${u}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gl()}function Qo(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function fl(n){const e=Qo(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Nr(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Nr(o)}}}function Nr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gl(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return me("not implemented")}_getIdTokenResponse(e){return me("not implemented")}_linkToIdToken(e,t){return me("not implemented")}_getReauthenticationResolver(e){return me("not implemented")}}async function pl(n,e){return sn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(n,e){return rn(n,"POST","/v1/accounts:signInWithPassword",nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(n,e){return rn(n,"POST","/v1/accounts:signInWithEmailLink",nn(n,e))}async function vl(n,e){return rn(n,"POST","/v1/accounts:signInWithEmailLink",nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Ai{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Vt(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Vt(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ml(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yl(e,{email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return pl(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vl(e,{idToken:t,email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(n,e){return rn(n,"POST","/v1/accounts:signInWithIdp",nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="http://localhost";class Ge extends Ai{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ge(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=Ii(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ge(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return nt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,nt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nt(e,t)}buildRequest(){const e={requestUri:wl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=en(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Il(n){const e=kt(At(n)).link,t=e?kt(At(e)).deep_link_id:null,s=kt(At(n)).deep_link_id;return(s?kt(At(s)).link:null)||s||t||e||n}class Ci{constructor(e){var t,s,i,r,o,a;const u=kt(At(e)),c=(t=u.apiKey)!==null&&t!==void 0?t:null,l=(s=u.oobCode)!==null&&s!==void 0?s:null,h=Tl((i=u.mode)!==null&&i!==void 0?i:null);T(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=(r=u.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Il(e);try{return new Ci(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.providerId=pt.PROVIDER_ID}static credential(e,t){return Vt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ci.parseLink(t);return T(s,"argument-error"),Vt._fromEmailAndCode(e,s.code,s.tenantId)}}pt.PROVIDER_ID="password";pt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends bi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends on{constructor(){super("facebook.com")}static credential(e){return Ge._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ce.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends on{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ge._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return be.credential(t,s)}catch{return null}}}be.GOOGLE_SIGN_IN_METHOD="google.com";be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends on{constructor(){super("github.com")}static credential(e){return Ge._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends on{constructor(){super("twitter.com")}static credential(e,t){return Ge._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ne.credential(t,s)}catch{return null}}}Ne.TWITTER_SIGN_IN_METHOD="twitter.com";Ne.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(n,e){return rn(n,"POST","/v1/accounts:signUp",nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Be._fromIdTokenResponse(e,s,i),o=Dr(s);return new He({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Dr(s);return new He({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Dr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends ss{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Vn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Vn(e,t,s,i)}}function Xo(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Vn._fromErrorAndOperation(n,r,e,s):r})}async function _l(n,e,t=!1){const s=await Ut(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return He._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await Ut(n,Xo(s,i,e,n),t);T(r.idToken,s,"internal-error");const o=Si(r.idToken);T(o,s,"internal-error");const{sub:a}=o;return T(n.uid===a,s,"user-mismatch"),He._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ae(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(n,e,t=!1){const s="signIn",i=await Xo(n,s,e),r=await He._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function kl(n,e){return Yo(gt(n),e)}async function Yp(n,e,t){const s=gt(n),i=await El(s,{returnSecureToken:!0,email:e,password:t}),r=await He._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function Jp(n,e,t){return kl(oe(n),pt.credential(e,t))}function Al(n,e,t,s){return oe(n).onIdTokenChanged(e,t,s)}function Cl(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function Zp(n){return oe(n).signOut()}const qn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qn,"1"),this.storage.removeItem(qn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){const n=ne();return ki(n)||is(n)}const Rl=1e3,Nl=10;class Zo extends Jo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bl()&&cl(),this.fallbackToPolling=zo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);ul()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Nl):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Rl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zo.type="LOCAL";const Dl=Zo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Jo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ea.type="SESSION";const ta=ea;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new rs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),u=await Ol(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,u)=>{const c=Ri("",20);i.port1.start();const l=setTimeout(()=>{u(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const g=h;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(g.data.response);break;default:clearTimeout(l),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return window}function Pl(n){he().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(){return typeof he().WorkerGlobalScope!="undefined"&&typeof he().importScripts=="function"}async function Ml(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xl(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ul(){return na()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="firebaseLocalStorageDb",Fl=1,$n="firebaseLocalStorage",ia="fbase_key";class an{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function os(n,e){return n.transaction([$n],e?"readwrite":"readonly").objectStore($n)}function Vl(){const n=indexedDB.deleteDatabase(sa);return new an(n).toPromise()}function Qs(){const n=indexedDB.open(sa,Fl);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore($n,{keyPath:ia})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains($n)?e(s):(s.close(),await Vl(),e(await Qs()))})})}async function Or(n,e,t){const s=os(n,!0).put({[ia]:e,value:t});return new an(s).toPromise()}async function ql(n,e){const t=os(n,!1).get(e),s=await new an(t).toPromise();return s===void 0?null:s.value}function Lr(n,e){const t=os(n,!0).delete(e);return new an(t).toPromise()}const $l=800,Bl=3;class ra{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Bl)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return na()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rs._getInstance(Ul()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ml(),!this.activeServiceWorker)return;this.sender=new Ll(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((t=s[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qs();return await Or(e,qn,"1"),await Lr(e,qn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Or(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>ql(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=os(i,!1).getAll();return new an(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$l)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ra.type="LOCAL";const jl=ra;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Gl(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=le("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Kl().appendChild(s)})}function Hl(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new tn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n,e){return e?ye(e):(T(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Ai{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zl(n){return Yo(n.auth,new Ni(n),n.bypassAuthState)}function Wl(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),Sl(t,new Ni(n),n.bypassAuthState)}async function Ql(n){const{auth:e,user:t}=n;return T(t,e,"internal-error"),_l(t,new Ni(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zl;case"linkViaPopup":case"linkViaRedirect":return Ql;case"reauthViaPopup":case"reauthViaRedirect":return Wl;default:ae(this.auth,"internal-error")}}resolve(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new tn(2e3,1e4);async function em(n,e,t){const s=gt(n);Bc(n,e,bi);const i=oa(s,t);return new Fe(s,"signInViaPopup",e,i).executeNotNull()}class Fe extends aa{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Fe.currentPopupAction&&Fe.currentPopupAction.cancel(),Fe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){Te(this.filter.length===1,"Popup operations only handle one event");const e=Ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(le(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(le(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(le(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Xl.get())};e()}}Fe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="pendingRedirect",Ln=new Map;class Jl extends aa{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ln.get(this.auth._key());if(!e){try{const s=await Zl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ln.set(this.auth._key(),e)}return this.bypassAuthState||Ln.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zl(n,e){const t=nh(e),s=th(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function eh(n,e){Ln.set(n._key(),e)}function th(n){return ye(n._redirectPersistence)}function nh(n){return On(Yl,n.config.apiKey,n.name)}async function sh(n,e,t=!1){const s=gt(n),i=oa(s,e),o=await new Jl(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=10*60*1e3;class rh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oh(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!ua(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(le(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ih&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pr(e))}saveEventToCache(e){this.cachedEventUids.add(Pr(e)),this.lastProcessedEventTime=Date.now()}}function Pr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ua({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oh(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ua(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ah(n,e={}){return sn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ch=/^https?/;async function lh(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ah(n);for(const t of e)try{if(hh(t))return}catch{}ae(n,"unauthorized-domain")}function hh(n){const e=Ws(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!ch.test(t))return!1;if(uh.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new tn(3e4,6e4);function Mr(){const n=he().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function fh(n){return new Promise((e,t)=>{var s,i,r;function o(){Mr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mr(),t(le(n,"network-request-failed"))},timeout:dh.get()})}if(!((i=(s=he().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=he().gapi)===null||r===void 0)&&r.load)o();else{const a=Hl("iframefcb");return he()[a]=()=>{gapi.load?o():t(le(n,"network-request-failed"))},Gl(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw Pn=null,e})}let Pn=null;function gh(n){return Pn=Pn||fh(n),Pn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new tn(5e3,15e3),mh="__/auth/iframe",yh="emulator/auth/iframe",vh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Th(n){const e=n.config;T(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_i(e,yh):`https://${n.config.authDomain}/${mh}`,s={apiKey:e.apiKey,appName:n.name,v:Zt},i=wh.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${en(s).slice(1)}`}async function Ih(n){const e=await gh(n),t=he().gapi;return T(t,n,"internal-error"),e.open({where:document.body,url:Th(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vh,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=le(n,"network-request-failed"),a=he().setTimeout(()=>{r(o)},ph.get());function u(){he().clearTimeout(a),i(s)}s.ping(u).then(u,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_h=500,Sh=600,kh="_blank",Ah="http://localhost";class xr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ch(n,e,t,s=_h,i=Sh){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Eh),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ne().toLowerCase();t&&(a=Bo(c)?kh:t),$o(c)&&(e=e||Ah,u.scrollbars="yes");const l=Object.entries(u).reduce((g,[p,w])=>`${g}${p}=${w},`,"");if(al(c)&&a!=="_self")return bh(e||"",a),new xr(null);const h=window.open(e||"",a,l);T(h,n,"popup-blocked");try{h.focus()}catch{}return new xr(h)}function bh(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="__/auth/handler",Nh="emulator/auth/handler";function Ur(n,e,t,s,i,r){T(n.config.authDomain,n,"auth-domain-config-required"),T(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Zt,eventId:i};if(e instanceof bi){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Pc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,c]of Object.entries(r||{}))o[u]=c}if(e instanceof on){const u=e.getScopes().filter(c=>c!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${Dh(n)}?${en(a).slice(1)}`}function Dh({config:n}){return n.emulator?_i(n,Nh):`https://${n.authDomain}/${Rh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="webStorageSupport";class Oh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ta,this._completeRedirectFn=sh,this._overrideRedirectResult=eh}async _openPopup(e,t,s,i){var r;Te((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ur(e,t,s,Ws(),i);return Ch(e,o,Ri())}async _openRedirect(e,t,s,i){return await this._originValidation(e),Pl(Ur(e,t,s,Ws(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Te(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Ih(e),s=new rh(e);return t.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ms,{type:Ms},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ms];o!==void 0&&t(!!o),ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lh(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zo()||ki()||is()}}const Lh=Oh;var Fr="@firebase/auth",Vr="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xh(n){Hs(new zs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,u)=>{T(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),T(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wo(n)},l=new hl(a,u,c);return Kc(l,t),l})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Hs(new zs("auth-internal",e=>{const t=gt(e.getProvider("auth").getImmediate());return(s=>new Ph(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Fr,Vr,Mh(n)),xt(Fr,Vr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=5*60,Fh=No("authIdTokenMaxAge")||Uh;let qr=null;const Vh=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Fh)return;const i=t==null?void 0:t.token;qr!==i&&(qr=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qh(n=Do()){const e=wi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=jc(n,{popupRedirectResolver:Lh,persistence:[jl,Dl,ta]}),s=No("authTokenSyncURL");if(s){const r=Vh(s);Cl(t,r,()=>r(t.currentUser)),Al(t,o=>r(o))}const i=bc("auth");return i&&dl(t,`http://${i}`),t}xh("Browser");var $h=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},m,Di=Di||{},E=$h||self;function Bn(){}function as(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function un(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Bh(n){return Object.prototype.hasOwnProperty.call(n,xs)&&n[xs]||(n[xs]=++jh)}var xs="closure_uid_"+(1e9*Math.random()>>>0),jh=0;function Kh(n,e,t){return n.call.apply(n.bind,arguments)}function Gh(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function J(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=Kh:J=Gh,J.apply(null,arguments)}function kn(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function z(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Me(){this.s=this.s,this.o=this.o}var Hh=0;Me.prototype.s=!1;Me.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Hh!=0)&&Bh(this)};Me.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ca=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Oi(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function $r(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(as(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function Z(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var zh=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{E.addEventListener("test",Bn,e),E.removeEventListener("test",Bn,e)}catch{}return n}();function jn(n){return/^[\s\xa0]*$/.test(n)}var Br=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Us(n,e){return n<e?-1:n>e?1:0}function us(){var n=E.navigator;return n&&(n=n.userAgent)?n:""}function ce(n){return us().indexOf(n)!=-1}function Li(n){return Li[" "](n),n}Li[" "]=Bn;function Wh(n){var e=Yh;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Qh=ce("Opera"),ot=ce("Trident")||ce("MSIE"),la=ce("Edge"),Xs=la||ot,ha=ce("Gecko")&&!(us().toLowerCase().indexOf("webkit")!=-1&&!ce("Edge"))&&!(ce("Trident")||ce("MSIE"))&&!ce("Edge"),Xh=us().toLowerCase().indexOf("webkit")!=-1&&!ce("Edge");function da(){var n=E.document;return n?n.documentMode:void 0}var Kn;e:{var Fs="",Vs=function(){var n=us();if(ha)return/rv:([^\);]+)(\)|;)/.exec(n);if(la)return/Edge\/([\d\.]+)/.exec(n);if(ot)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Xh)return/WebKit\/(\S+)/.exec(n);if(Qh)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Vs&&(Fs=Vs?Vs[1]:""),ot){var qs=da();if(qs!=null&&qs>parseFloat(Fs)){Kn=String(qs);break e}}Kn=Fs}var Yh={};function Jh(){return Wh(function(){let n=0;const e=Br(String(Kn)).split("."),t=Br("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var i=e[o]||"",r=t[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;n=Us(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Us(i[2].length==0,r[2].length==0)||Us(i[2],r[2]),i=i[3],r=r[3]}while(n==0)}return 0<=n})}var Ys;if(E.document&&ot){var jr=da();Ys=jr||parseInt(Kn,10)||void 0}else Ys=void 0;var Zh=Ys;function qt(n,e){if(Z.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(ha){e:{try{Li(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:ed[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&qt.X.h.call(this)}}z(qt,Z);var ed={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var cn="closure_listenable_"+(1e6*Math.random()|0),td=0;function nd(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=i,this.key=++td,this.ba=this.ea=!1}function cs(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Pi(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function fa(n){const e={};for(const t in n)e[t]=n[t];return e}const Kr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ga(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<Kr.length;r++)t=Kr[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function ls(n){this.src=n,this.g={},this.h=0}ls.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Zs(n,e,s,i);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new nd(e,this.src,r,!!s,i),e.ea=t,n.push(e)),e};function Js(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=ca(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(cs(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Zs(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.ba&&r.listener==e&&r.capture==!!t&&r.ha==s)return i}return-1}var Mi="closure_lm_"+(1e6*Math.random()|0),$s={};function pa(n,e,t,s,i){if(s&&s.once)return ya(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)pa(n,e[r],t,s,i);return null}return t=Fi(t),n&&n[cn]?n.N(e,t,un(s)?!!s.capture:!!s,i):ma(n,e,t,!1,s,i)}function ma(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var o=un(i)?!!i.capture:!!i,a=Ui(n);if(a||(n[Mi]=a=new ls(n)),t=a.add(e,t,s,o,r),t.proxy)return t;if(s=sd(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)zh||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(wa(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function sd(){function n(t){return e.call(n.src,n.listener,t)}const e=id;return n}function ya(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ya(n,e[r],t,s,i);return null}return t=Fi(t),n&&n[cn]?n.O(e,t,un(s)?!!s.capture:!!s,i):ma(n,e,t,!0,s,i)}function va(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)va(n,e[r],t,s,i);else s=un(s)?!!s.capture:!!s,t=Fi(t),n&&n[cn]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Zs(r,t,s,i),-1<t&&(cs(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=Ui(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Zs(e,t,s,i)),(t=-1<n?e[n]:null)&&xi(t))}function xi(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[cn])Js(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(wa(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=Ui(e))?(Js(t,n),t.h==0&&(t.src=null,e[Mi]=null)):cs(n)}}}function wa(n){return n in $s?$s[n]:$s[n]="on"+n}function id(n,e){if(n.ba)n=!0;else{e=new qt(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&xi(n),n=t.call(s,e)}return n}function Ui(n){return n=n[Mi],n instanceof ls?n:null}var Bs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fi(n){return typeof n=="function"?n:(n[Bs]||(n[Bs]=function(e){return n.handleEvent(e)}),n[Bs])}function j(){Me.call(this),this.i=new ls(this),this.P=this,this.I=null}z(j,Me);j.prototype[cn]=!0;j.prototype.removeEventListener=function(n,e,t,s){va(this,n,e,t,s)};function H(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new Z(e,n);else if(e instanceof Z)e.target=e.target||n;else{var i=e;e=new Z(s,n),ga(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];i=An(o,s,!0,e)&&i}if(o=e.g=n,i=An(o,s,!0,e)&&i,i=An(o,s,!1,e)&&i,t)for(r=0;r<t.length;r++)o=e.g=t[r],i=An(o,s,!1,e)&&i}j.prototype.M=function(){if(j.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)cs(t[s]);delete n.g[e],n.h--}}this.I=null};j.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};j.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function An(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==t){var a=o.listener,u=o.ha||o.src;o.ea&&Js(n.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var Vi=E.JSON.stringify;function rd(){var n=Ea;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class od{constructor(){this.h=this.g=null}add(e,t){const s=Ta.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var Ta=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new ad,n=>n.reset());class ad{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ud(n){E.setTimeout(()=>{throw n},0)}function Ia(n,e){ei||cd(),ti||(ei(),ti=!0),Ea.add(n,e)}var ei;function cd(){var n=E.Promise.resolve(void 0);ei=function(){n.then(ld)}}var ti=!1,Ea=new od;function ld(){for(var n;n=rd();){try{n.h.call(n.g)}catch(t){ud(t)}var e=Ta;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ti=!1}function hs(n,e){j.call(this),this.h=n||1,this.g=e||E,this.j=J(this.lb,this),this.l=Date.now()}z(hs,j);m=hs.prototype;m.ca=!1;m.R=null;m.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),H(this,"tick"),this.ca&&(qi(this),this.start()))}};m.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qi(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}m.M=function(){hs.X.M.call(this),qi(this),delete this.g};function $i(n,e,t){if(typeof n=="function")t&&(n=J(n,t));else if(n&&typeof n.handleEvent=="function")n=J(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:E.setTimeout(n,e||0)}function _a(n){n.g=$i(()=>{n.g=null,n.i&&(n.i=!1,_a(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class hd extends Me{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_a(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(n){Me.call(this),this.h=n,this.g={}}z($t,Me);var Gr=[];function Sa(n,e,t,s){Array.isArray(t)||(t&&(Gr[0]=t.toString()),t=Gr);for(var i=0;i<t.length;i++){var r=pa(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function ka(n){Pi(n.g,function(e,t){this.g.hasOwnProperty(t)&&xi(e)},n),n.g={}}$t.prototype.M=function(){$t.X.M.call(this),ka(this)};$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ds(){this.g=!0}ds.prototype.Aa=function(){this.g=!1};function dd(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function fd(n,e,t,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+o})}function et(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+pd(n,t)+(s?" "+s:"")})}function gd(n,e){n.info(function(){return"TIMEOUT: "+e})}ds.prototype.info=function(){};function pd(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vi(t)}catch{return e}}var Qe={},Hr=null;function fs(){return Hr=Hr||new j}Qe.Pa="serverreachability";function Aa(n){Z.call(this,Qe.Pa,n)}z(Aa,Z);function Bt(n){const e=fs();H(e,new Aa(e))}Qe.STAT_EVENT="statevent";function Ca(n,e){Z.call(this,Qe.STAT_EVENT,n),this.stat=e}z(Ca,Z);function te(n){const e=fs();H(e,new Ca(e,n))}Qe.Qa="timingevent";function ba(n,e){Z.call(this,Qe.Qa,n),this.size=e}z(ba,Z);function ln(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){n()},e)}var gs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ra={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Bi(){}Bi.prototype.h=null;function zr(n){return n.h||(n.h=n.i())}function Na(){}var hn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ji(){Z.call(this,"d")}z(ji,Z);function Ki(){Z.call(this,"c")}z(Ki,Z);var ni;function ps(){}z(ps,Bi);ps.prototype.g=function(){return new XMLHttpRequest};ps.prototype.i=function(){return{}};ni=new ps;function dn(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new $t(this),this.O=md,n=Xs?125:void 0,this.T=new hs(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Da}function Da(){this.i=null,this.g="",this.h=!1}var md=45e3,si={},Gn={};m=dn.prototype;m.setTimeout=function(n){this.O=n};function ii(n,e,t){n.K=1,n.v=ys(Ie(e)),n.s=t,n.P=!0,Oa(n,null)}function Oa(n,e){n.F=Date.now(),fn(n),n.A=Ie(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),qa(t.i,"t",s),n.C=0,t=n.l.H,n.h=new Da,n.g=au(n.l,t?e:null,!n.s),0<n.N&&(n.L=new hd(J(n.La,n,n.g),n.N)),Sa(n.S,n.g,"readystatechange",n.ib),e=n.H?fa(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Bt(),dd(n.j,n.u,n.A,n.m,n.U,n.s)}m.ib=function(n){n=n.target;const e=this.L;e&&ve(n)==3?e.l():this.La(n)};m.La=function(n){try{if(n==this.g)e:{const l=ve(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Xs||this.g&&(this.h.h||this.g.fa()||Yr(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Bt(3):Bt(2)),ms(this);var t=this.g.aa();this.Y=t;t:if(La(this)){var s=Yr(this.g);n="";var i=s.length,r=ve(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ve(this),Dt(this);var o="";break t}this.h.i=new E.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,fd(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jn(a)){var c=a;break t}}c=null}if(t=c)et(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ri(this,t);else{this.i=!1,this.o=3,te(12),Ve(this),Dt(this);break e}}this.P?(Pa(this,l,o),Xs&&this.i&&l==3&&(Sa(this.S,this.T,"tick",this.hb),this.T.start())):(et(this.j,this.m,o,null),ri(this,o)),l==4&&Ve(this),this.i&&!this.I&&(l==4?su(this.l,this):(this.i=!1,fn(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,te(12)):(this.o=0,te(13)),Ve(this),Dt(this)}}}catch{}finally{}};function La(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function Pa(n,e,t){let s=!0,i;for(;!n.I&&n.C<t.length;)if(i=yd(n,t),i==Gn){e==4&&(n.o=4,te(14),s=!1),et(n.j,n.m,null,"[Incomplete Response]");break}else if(i==si){n.o=4,te(15),et(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else et(n.j,n.m,i,null),ri(n,i);La(n)&&i!=Gn&&i!=si&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,te(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Yi(e),e.K=!0,te(11))):(et(n.j,n.m,t,"[Invalid Chunked Response]"),Ve(n),Dt(n))}m.hb=function(){if(this.g){var n=ve(this.g),e=this.g.fa();this.C<e.length&&(ms(this),Pa(this,n,e),this.i&&n!=4&&fn(this))}};function yd(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?Gn:(t=Number(e.substring(t,s)),isNaN(t)?si:(s+=1,s+t>e.length?Gn:(e=e.substr(s,t),n.C=s+t,e)))}m.cancel=function(){this.I=!0,Ve(this)};function fn(n){n.V=Date.now()+n.O,Ma(n,n.O)}function Ma(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ln(J(n.gb,n),e)}function ms(n){n.B&&(E.clearTimeout(n.B),n.B=null)}m.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(gd(this.j,this.A),this.K!=2&&(Bt(),te(17)),Ve(this),this.o=2,Dt(this)):Ma(this,this.V-n)};function Dt(n){n.l.G==0||n.I||su(n.l,n)}function Ve(n){ms(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,qi(n.T),ka(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function ri(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||oi(t.h,n))){if(!n.J&&oi(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Wn(t),Ts(t);else break e;Xi(t),te(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=ln(J(t.cb,t),6e3));if(1>=ja(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else qe(t,11)}else if((n.J||t.g==n)&&Wn(t),!jn(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(t.T=c[0],c=c[1],t.G==2)if(c[0]=="c"){t.I=c[1],t.ka=c[2];const l=c[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=c[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const p=n.g;if(p){const w=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var r=s.h;r.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Gi(r,r.h),r.h=null))}if(s.D){const A=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.za=A,O(s.F,s.D,A))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=ou(s,s.H?s.ka:null,s.V),o.J){Ka(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(ms(a),fn(a)),s.g=o}else tu(s);0<t.i.length&&Is(t)}else c[0]!="stop"&&c[0]!="close"||qe(t,7);else t.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?qe(t,7):Qi(t):c[0]!="noop"&&t.l&&t.l.wa(c),t.A=0)}}Bt(4)}catch{}}function vd(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map!="undefined"&&n instanceof Map||typeof Set!="undefined"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(as(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function wd(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map!="undefined"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set!="undefined"&&n instanceof Set)){if(as(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function xa(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(as(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=wd(n),s=vd(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var Ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Td(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function je(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof je){this.h=e!==void 0?e:n.h,Hn(this,n.j),this.s=n.s,this.g=n.g,zn(this,n.m),this.l=n.l,e=n.i;var t=new jt;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Wr(this,t),this.o=n.o}else n&&(t=String(n).match(Ua))?(this.h=!!e,Hn(this,t[1]||"",!0),this.s=Ct(t[2]||""),this.g=Ct(t[3]||"",!0),zn(this,t[4]),this.l=Ct(t[5]||"",!0),Wr(this,t[6]||"",!0),this.o=Ct(t[7]||"")):(this.h=!!e,this.i=new jt(null,this.h))}je.prototype.toString=function(){var n=[],e=this.j;e&&n.push(bt(e,Qr,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(bt(e,Qr,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(bt(t,t.charAt(0)=="/"?_d:Ed,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",bt(t,kd)),n.join("")};function Ie(n){return new je(n)}function Hn(n,e,t){n.j=t?Ct(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function zn(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Wr(n,e,t){e instanceof jt?(n.i=e,Ad(n.i,n.h)):(t||(e=bt(e,Sd)),n.i=new jt(e,n.h))}function O(n,e,t){n.i.set(e,t)}function ys(n){return O(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ct(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function bt(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Id),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Id(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Qr=/[#\/\?@]/g,Ed=/[#\?:]/g,_d=/[#\?]/g,Sd=/[#\?@]/g,kd=/#/g;function jt(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function xe(n){n.g||(n.g=new Map,n.h=0,n.i&&Td(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}m=jt.prototype;m.add=function(n,e){xe(this),this.i=null,n=mt(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Fa(n,e){xe(n),e=mt(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Va(n,e){return xe(n),e=mt(n,e),n.g.has(e)}m.forEach=function(n,e){xe(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};m.oa=function(){xe(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};m.W=function(n){xe(this);let e=[];if(typeof n=="string")Va(this,n)&&(e=e.concat(this.g.get(mt(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};m.set=function(n,e){return xe(this),this.i=null,n=mt(this,n),Va(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};m.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function qa(n,e,t){Fa(n,e),0<t.length&&(n.i=null,n.g.set(mt(n,e),Oi(t)),n.h+=t.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function mt(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Ad(n,e){e&&!n.j&&(xe(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(Fa(this,s),qa(this,i,t))},n)),n.j=e}var Cd=class{constructor(n,e){this.h=n,this.g=e}};function $a(n){this.l=n||bd,E.PerformanceNavigationTiming?(n=E.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(E.g&&E.g.Ga&&E.g.Ga()&&E.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bd=10;function Ba(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ja(n){return n.h?1:n.g?n.g.size:0}function oi(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Gi(n,e){n.g?n.g.add(e):n.h=e}function Ka(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}$a.prototype.cancel=function(){if(this.i=Ga(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Ga(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Oi(n.i)}function Hi(){}Hi.prototype.stringify=function(n){return E.JSON.stringify(n,void 0)};Hi.prototype.parse=function(n){return E.JSON.parse(n,void 0)};function Rd(){this.g=new Hi}function Nd(n,e,t){const s=t||"";try{xa(n,function(i,r){let o=i;un(i)&&(o=Vi(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Dd(n,e){const t=new ds;if(E.Image){const s=new Image;s.onload=kn(Cn,t,s,"TestLoadImage: loaded",!0,e),s.onerror=kn(Cn,t,s,"TestLoadImage: error",!1,e),s.onabort=kn(Cn,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=kn(Cn,t,s,"TestLoadImage: timeout",!1,e),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Cn(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function gn(n){this.l=n.ac||null,this.j=n.jb||!1}z(gn,Bi);gn.prototype.g=function(){return new vs(this.l,this.j)};gn.prototype.i=function(n){return function(){return n}}({});function vs(n,e){j.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=zi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(vs,j);var zi=0;m=vs.prototype;m.open=function(n,e){if(this.readyState!=zi)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Kt(this)};m.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||E).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pn(this)),this.readyState=zi};m.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Kt(this)),this.g&&(this.readyState=3,Kt(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof E.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ha(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function Ha(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}m.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?pn(this):Kt(this),this.readyState==3&&Ha(this)}};m.Va=function(n){this.g&&(this.response=this.responseText=n,pn(this))};m.Ua=function(n){this.g&&(this.response=n,pn(this))};m.ga=function(){this.g&&pn(this)};function pn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Kt(n)}m.setRequestHeader=function(n,e){this.v.append(n,e)};m.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Kt(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Od=E.JSON.parse;function P(n){j.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=za,this.K=this.L=!1}z(P,j);var za="",Ld=/^https?$/i,Pd=["POST","PUT"];m=P.prototype;m.Ka=function(n){this.L=n};m.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ni.g(),this.C=this.u?zr(this.u):zr(ni),this.g.onreadystatechange=J(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){Xr(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=E.FormData&&n instanceof E.FormData,!(0<=ca(Pd,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xa(this),0<this.B&&((this.K=Md(this.g))?(this.g.timeout=this.B,this.g.ontimeout=J(this.qa,this)):this.A=$i(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Xr(this,r)}};function Md(n){return ot&&Jh()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}m.qa=function(){typeof Di!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Xr(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Wa(n),ws(n)}function Wa(n){n.D||(n.D=!0,H(n,"complete"),H(n,"error"))}m.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,H(this,"complete"),H(this,"abort"),ws(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ws(this,!0)),P.X.M.call(this)};m.Ha=function(){this.s||(this.F||this.v||this.l?Qa(this):this.fb())};m.fb=function(){Qa(this)};function Qa(n){if(n.h&&typeof Di!="undefined"&&(!n.C[1]||ve(n)!=4||n.aa()!=2)){if(n.v&&ve(n)==4)$i(n.Ha,0,n);else if(H(n,"readystatechange"),ve(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var i=String(n.H).match(Ua)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ld.test(i?i.toLowerCase():"")}t=s}if(t)H(n,"complete"),H(n,"success");else{n.m=6;try{var o=2<ve(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Wa(n)}}finally{ws(n)}}}}function ws(n,e){if(n.g){Xa(n);const t=n.g,s=n.C[0]?Bn:null;n.g=null,n.C=null,e||H(n,"ready");try{t.onreadystatechange=s}catch{}}}function Xa(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(E.clearTimeout(n.A),n.A=null)}function ve(n){return n.g?n.g.readyState:0}m.aa=function(){try{return 2<ve(this)?this.g.status:-1}catch{return-1}};m.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Od(e)}};function Yr(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case za:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ea=function(){return this.m};m.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ya(n){let e="";return Pi(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Wi(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Ya(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):O(n,e,t))}function St(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Ja(n){this.Ca=0,this.i=[],this.j=new ds,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=St("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=St("baseRetryDelayMs",5e3,n),this.bb=St("retryDelaySeedMs",1e4,n),this.$a=St("forwardChannelMaxRetries",2,n),this.ta=St("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new $a(n&&n.concurrentRequestLimit),this.Fa=new Rd,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}m=Ja.prototype;m.ma=8;m.G=1;function Qi(n){if(Za(n),n.G==3){var e=n.U++,t=Ie(n.F);O(t,"SID",n.I),O(t,"RID",e),O(t,"TYPE","terminate"),mn(n,t),e=new dn(n,n.j,e,void 0),e.K=2,e.v=ys(Ie(t)),t=!1,E.navigator&&E.navigator.sendBeacon&&(t=E.navigator.sendBeacon(e.v.toString(),"")),!t&&E.Image&&(new Image().src=e.v,t=!0),t||(e.g=au(e.l,null),e.g.da(e.v)),e.F=Date.now(),fn(e)}ru(n)}function Ts(n){n.g&&(Yi(n),n.g.cancel(),n.g=null)}function Za(n){Ts(n),n.u&&(E.clearTimeout(n.u),n.u=null),Wn(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&E.clearTimeout(n.m),n.m=null)}function Is(n){Ba(n.h)||n.m||(n.m=!0,Ia(n.Ja,n),n.C=0)}function xd(n,e){return ja(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=ln(J(n.Ja,n,e),iu(n,n.C)),n.C++,!0)}m.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new dn(this,this.j,n,void 0);let r=this.s;if(this.S&&(r?(r=fa(r),ga(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=eu(this,i,e),t=Ie(this.F),O(t,"RID",n),O(t,"CVER",22),this.D&&O(t,"X-HTTP-Session-Id",this.D),mn(this,t),r&&(this.N?e="headers="+encodeURIComponent(String(Ya(r)))+"&"+e:this.o&&Wi(t,this.o,r)),Gi(this.h,i),this.Ya&&O(t,"TYPE","init"),this.O?(O(t,"$req",e),O(t,"SID","null"),i.Z=!0,ii(i,t,null)):ii(i,t,e),this.G=2}}else this.G==3&&(n?Jr(this,n):this.i.length==0||Ba(this.h)||Jr(this))};function Jr(n,e){var t;e?t=e.m:t=n.U++;const s=Ie(n.F);O(s,"SID",n.I),O(s,"RID",t),O(s,"AID",n.T),mn(n,s),n.o&&n.s&&Wi(s,n.o,n.s),t=new dn(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=eu(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Gi(n.h,t),ii(t,s,e)}function mn(n,e){n.ia&&Pi(n.ia,function(t,s){O(e,s,t)}),n.l&&xa({},function(t,s){O(e,s,t)})}function eu(n,e,t){t=Math.min(n.i.length,t);var s=n.l?J(n.l.Ra,n.l,n):null;e:{var i=n.i;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<t;u++){let c=i[u].h;const l=i[u].g;if(c-=r,0>c)r=Math.max(0,i[u].h-100),a=!1;else try{Nd(l,o,"req"+c+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function tu(n){n.g||n.u||(n.Z=1,Ia(n.Ia,n),n.A=0)}function Xi(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=ln(J(n.Ia,n),iu(n,n.A)),n.A++,!0)}m.Ia=function(){if(this.u=null,nu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=ln(J(this.eb,this),n)}};m.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,te(10),Ts(this),nu(this))};function Yi(n){n.B!=null&&(E.clearTimeout(n.B),n.B=null)}function nu(n){n.g=new dn(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Ie(n.sa);O(e,"RID","rpc"),O(e,"SID",n.I),O(e,"CI",n.L?"0":"1"),O(e,"AID",n.T),O(e,"TYPE","xmlhttp"),mn(n,e),n.o&&n.s&&Wi(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=ys(Ie(e)),t.s=null,t.P=!0,Oa(t,n)}m.cb=function(){this.v!=null&&(this.v=null,Ts(this),Xi(this),te(19))};function Wn(n){n.v!=null&&(E.clearTimeout(n.v),n.v=null)}function su(n,e){var t=null;if(n.g==e){Wn(n),Yi(n),n.g=null;var s=2}else if(oi(n.h,e))t=e.D,Ka(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;s=fs(),H(s,new ba(s,t)),Is(n)}else tu(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(s==1&&xd(n,e)||s==2&&Xi(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:qe(n,5);break;case 4:qe(n,10);break;case 3:qe(n,6);break;default:qe(n,2)}}}function iu(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function qe(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=J(n.kb,n);t||(t=new je("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||Hn(t,"https"),ys(t)),Dd(t.toString(),s)}else te(2);n.G=0,n.l&&n.l.va(e),ru(n),Za(n)}m.kb=function(n){n?(this.j.info("Successfully pinged google.com"),te(2)):(this.j.info("Failed to ping google.com"),te(1))};function ru(n){if(n.G=0,n.la=[],n.l){const e=Ga(n.h);(e.length!=0||n.i.length!=0)&&($r(n.la,e),$r(n.la,n.i),n.h.i.length=0,Oi(n.i),n.i.length=0),n.l.ua()}}function ou(n,e,t){var s=t instanceof je?Ie(t):new je(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),zn(s,s.m);else{var i=E.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new je(null,void 0);s&&Hn(r,s),e&&(r.g=e),i&&zn(r,i),t&&(r.l=t),s=r}return t=n.D,e=n.za,t&&e&&O(s,t,e),O(s,"VER",n.ma),mn(n,s),s}function au(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new P(new gn({jb:!0})):new P(n.ra),e.Ka(n.H),e}function uu(){}m=uu.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Ra=function(){};function Qn(){if(ot&&!(10<=Number(Zh)))throw Error("Environmental error: no available transport.")}Qn.prototype.g=function(n,e){return new se(n,e)};function se(n,e){j.call(this),this.g=new Ja(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!jn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jn(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new yt(this)}z(se,j);se.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;te(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=ou(n,null,n.V),Is(n)};se.prototype.close=function(){Qi(this.g)};se.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Vi(n),n=t);e.i.push(new Cd(e.ab++,n)),e.G==3&&Is(e)};se.prototype.M=function(){this.g.l=null,delete this.j,Qi(this.g),delete this.g,se.X.M.call(this)};function cu(n){ji.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}z(cu,ji);function lu(){Ki.call(this),this.status=1}z(lu,Ki);function yt(n){this.g=n}z(yt,uu);yt.prototype.xa=function(){H(this.g,"a")};yt.prototype.wa=function(n){H(this.g,new cu(n))};yt.prototype.va=function(n){H(this.g,new lu)};yt.prototype.ua=function(){H(this.g,"b")};Qn.prototype.createWebChannel=Qn.prototype.g;se.prototype.send=se.prototype.u;se.prototype.open=se.prototype.m;se.prototype.close=se.prototype.close;gs.NO_ERROR=0;gs.TIMEOUT=8;gs.HTTP_ERROR=6;Ra.COMPLETE="complete";Na.EventType=hn;hn.OPEN="a";hn.CLOSE="b";hn.ERROR="c";hn.MESSAGE="d";j.prototype.listen=j.prototype.N;P.prototype.listenOnce=P.prototype.O;P.prototype.getLastError=P.prototype.Oa;P.prototype.getLastErrorCode=P.prototype.Ea;P.prototype.getStatus=P.prototype.aa;P.prototype.getResponseJson=P.prototype.Sa;P.prototype.getResponseText=P.prototype.fa;P.prototype.send=P.prototype.da;P.prototype.setWithCredentials=P.prototype.Ka;var Ud=function(){return new Qn},Fd=function(){return fs()},js=gs,Vd=Ra,qd=Qe,Zr={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},$d=gn,bn=Na,Bd=P;const eo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vt="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new Oo("@firebase/firestore");function to(){return ze.logLevel}function y(n,...e){if(ze.logLevel<=rt.DEBUG){const t=e.map(Ji);ze.debug(`Firestore (${vt}): ${n}`,...t)}}function Ee(n,...e){if(ze.logLevel<=rt.ERROR){const t=e.map(Ji);ze.error(`Firestore (${vt}): ${n}`,...t)}}function ai(n,...e){if(ze.logLevel<=rt.WARN){const t=e.map(Ji);ze.warn(`Firestore (${vt}): ${n}`,...t)}}function Ji(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(n="Unexpected state"){const e=`FIRESTORE (${vt}) INTERNAL ASSERTION FAILED: `+n;throw Ee(e),new Error(e)}function D(n,e){n||_()}function k(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends ss{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Q.UNAUTHENTICATED))}shutdown(){}}class Kd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Gd{constructor(e){this.t=e,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let r=new De;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new De,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new De)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(D(typeof s.accessToken=="string"),new hu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return D(e===null||typeof e=="string"),new Q(e)}}class Hd{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(D(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class zd{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i}getToken(){return Promise.resolve(new Hd(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(Q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qd{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=r=>{r.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(D(typeof t.token=="string"),this.A=t.token,new Wd(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Xd(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function R(n,e){return n<e?-1:n>e?1:0}function at(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new I(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new V(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.timestamp=e}static fromTimestamp(e){return new S(e)}static min(){return new S(new V(0,0))}static max(){return new S(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,s){t===void 0?t=0:t>e.length&&_(),s===void 0?s=e.length-t:s>e.length-t&&_(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Gt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gt?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),o=t.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class L extends Gt{construct(e,t,s){return new L(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new I(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new L(t)}static emptyPath(){return new L([])}}const Yd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends Gt{construct(e,t,s){return new Y(e,t,s)}static isValidIdentifier(e){return Yd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new I(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new I(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new I(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new I(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Y(t)}static emptyPath(){return new Y([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(L.fromString(e))}static fromName(e){return new v(L.fromString(e).popFirst(5))}static empty(){return new v(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&L.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return L.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new L(e.slice()))}}function Jd(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new V(t+1,0):new V(t,s));return new Oe(i,v.empty(),e)}function Zd(n){return new Oe(n.readTime,n.key,-1)}class Oe{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Oe(S.min(),v.empty(),-1)}static max(){return new Oe(S.max(),v.empty(),-1)}}function ef(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:R(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==tf)throw n;y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof d?t:d.resolve(t)}catch(t){return d.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):d.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):d.reject(t)}static resolve(e){return new d((t,s)=>{t(e)})}static reject(e){return new d((t,s)=>{s(e)})}static waitFor(e){return new d((t,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&t()},u=>s(u))}),o=!0,r===i&&t()})}static or(e){let t=d.resolve(!1);for(const s of e)t=t.next(i=>i?d.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new d((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const c=u;t(e[c]).next(l=>{o[c]=l,++a,a===r&&s(o)},l=>i(l))}})}static doWhile(e,t){return new d((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function vn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Zi.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t,s,i,r,o,a,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Ht{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ht("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ht&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function wt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function fu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n){return n==null}function Xn(n){return n===0&&1/n==-1/0}function rf(n){return typeof n=="number"&&Number.isInteger(n)&&!Xn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ee(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ee.EMPTY_BYTE_STRING=new ee("");const of=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Le(n){if(D(!!n),typeof n=="string"){let e=0;const t=of.exec(n);if(D(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:x(n.seconds),nanos:x(n.nanos)}}function x(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ut(n){return typeof n=="string"?ee.fromBase64String(n):ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function pu(n){const e=n.mapValue.fields.__previous_value__;return gu(e)?pu(e):e}function zt(n){const e=Le(n.mapValue.fields.__local_write_time__.timestampValue);return new V(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function We(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gu(n)?4:af(n)?9007199254740991:10:_()}function fe(n,e){if(n===e)return!0;const t=We(n);if(t!==We(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return zt(n).isEqual(zt(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Le(s.timestampValue),o=Le(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return ut(s.bytesValue).isEqual(ut(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return x(s.geoPointValue.latitude)===x(i.geoPointValue.latitude)&&x(s.geoPointValue.longitude)===x(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return x(s.integerValue)===x(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=x(s.doubleValue),o=x(i.doubleValue);return r===o?Xn(r)===Xn(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return at(n.arrayValue.values||[],e.arrayValue.values||[],fe);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(no(r)!==no(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!fe(r[a],o[a])))return!1;return!0}(n,e);default:return _()}}function Wt(n,e){return(n.values||[]).find(t=>fe(t,e))!==void 0}function ct(n,e){if(n===e)return 0;const t=We(n),s=We(e);if(t!==s)return R(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return R(n.booleanValue,e.booleanValue);case 2:return function(i,r){const o=x(i.integerValue||i.doubleValue),a=x(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return so(n.timestampValue,e.timestampValue);case 4:return so(zt(n),zt(e));case 5:return R(n.stringValue,e.stringValue);case 6:return function(i,r){const o=ut(i),a=ut(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=R(o[u],a[u]);if(c!==0)return c}return R(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const o=R(x(i.latitude),x(r.latitude));return o!==0?o:R(x(i.longitude),x(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=ct(o[u],a[u]);if(c)return c}return R(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Rn.mapValue&&r===Rn.mapValue)return 0;if(i===Rn.mapValue)return 1;if(r===Rn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=R(a[l],c[l]);if(h!==0)return h;const g=ct(o[a[l]],u[c[l]]);if(g!==0)return g}return R(a.length,c.length)}(n.mapValue,e.mapValue);default:throw _()}}function so(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return R(n,e);const t=Le(n),s=Le(e),i=R(t.seconds,s.seconds);return i!==0?i:R(t.nanos,s.nanos)}function lt(n){return ui(n)}function ui(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=Le(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?ut(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,v.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ui(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ui(s.fields[a])}`;return r+"}"}(n.mapValue):_();var e,t}function ci(n){return!!n&&"integerValue"in n}function er(n){return!!n&&"arrayValue"in n}function io(n){return!!n&&"nullValue"in n}function ro(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mn(n){return!!n&&"mapValue"in n}function Ot(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return wt(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ot(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ot(n.arrayValue.values[t]);return e}return Object.assign({},n)}function af(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t){this.position=e,this.inclusive=t}}function oo(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),t.key):s=ct(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ao(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fe(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{}class F extends mu{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new cf(e,t,s):t==="array-contains"?new df(e,s):t==="in"?new ff(e,s):t==="not-in"?new gf(e,s):t==="array-contains-any"?new pf(e,s):new F(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new lf(e,s):new hf(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ct(t,this.value)):t!==null&&We(this.value)===We(t)&&this.matchesComparison(ct(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ge extends mu{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new ge(e,t)}matches(e){return yu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function yu(n){return n.op==="and"}function vu(n){return uf(n)&&yu(n)}function uf(n){for(const e of n.filters)if(e instanceof ge)return!1;return!0}function li(n){if(n instanceof F)return n.field.canonicalString()+n.op.toString()+lt(n.value);if(vu(n))return n.filters.map(e=>li(e)).join(",");{const e=n.filters.map(t=>li(t)).join(",");return`${n.op}(${e})`}}function wu(n,e){return n instanceof F?function(t,s){return s instanceof F&&t.op===s.op&&t.field.isEqual(s.field)&&fe(t.value,s.value)}(n,e):n instanceof ge?function(t,s){return s instanceof ge&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((i,r,o)=>i&&wu(r,s.filters[o]),!0):!1}(n,e):void _()}function Tu(n){return n instanceof F?function(e){return`${e.field.canonicalString()} ${e.op} ${lt(e.value)}`}(n):n instanceof ge?function(e){return e.op.toString()+" {"+e.getFilters().map(Tu).join(" ,")+"}"}(n):"Filter"}class cf extends F{constructor(e,t,s){super(e,t,s),this.key=v.fromName(s.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.matchesComparison(t)}}class lf extends F{constructor(e,t){super(e,"in",t),this.keys=Iu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class hf extends F{constructor(e,t){super(e,"not-in",t),this.keys=Iu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Iu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>v.fromName(s.referenceValue))}class df extends F{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return er(t)&&Wt(t.arrayValue,this.value)}}class ff extends F{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wt(this.value.arrayValue,t)}}class gf extends F{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Wt(this.value.arrayValue,t)}}class pf extends F{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!er(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Wt(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t="asc"){this.field=e,this.dir=t}}function mf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t){this.comparator=e,this.root=t||G.EMPTY}insert(e,t){return new $(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,G.BLACK,null,null))}remove(e){return new $(this.comparator,this.root.remove(e,this.comparator).copy(null,null,G.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nn(this.root,e,this.comparator,!0)}}class Nn{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class G{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s!=null?s:G.RED,this.left=i!=null?i:G.EMPTY,this.right=r!=null?r:G.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new G(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return G.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const e=this.left.check();if(e!==this.right.check())throw _();return e+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(n,e,t,s,i){return this}insert(n,e,t){return new G(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.comparator=e,this.data=new $(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uo(this.data.getIterator())}getIteratorFrom(e){return new uo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof q)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new q(this.comparator);return t.data=e,t}}class uo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.fields=e,e.sort(Y.comparator)}static empty(){return new ue([])}unionWith(e){let t=new q(Y.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return at(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.value=e}static empty(){return new ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Mn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ot(t)}setAll(e){let t=Y.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,s,i),s={},i=[],t=a.popLast()}o?s[a.lastSegment()]=Ot(o):i.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Mn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Mn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){wt(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new ie(Ot(this.value))}}function Eu(n){const e=[];return wt(n.fields,(t,s)=>{const i=new Y([t]);if(Mn(s)){const r=Eu(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new ue(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,s,i,r,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new X(e,0,S.min(),S.min(),S.min(),ie.empty(),0)}static newFoundDocument(e,t,s,i){return new X(e,1,t,S.min(),s,i,0)}static newNoDocument(e,t){return new X(e,2,t,S.min(),S.min(),ie.empty(),0)}static newUnknownDocument(e,t){return new X(e,3,t,S.min(),S.min(),ie.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof X&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new X(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function co(n,e=null,t=[],s=[],i=null,r=null,o=null){return new yf(n,e,t,s,i,r,o)}function tr(n){const e=k(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>li(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Es(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>lt(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>lt(s)).join(",")),e.ft=t}return e.ft}function nr(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!mf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ao(n.startAt,e.startAt)&&ao(n.endAt,e.endAt)}function hi(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this._t=null,this.startAt,this.endAt}}function vf(n,e,t,s,i,r,o,a){return new _s(n,e,t,s,i,r,o,a)}function sr(n){return new _s(n)}function lo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wf(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Tf(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function If(n){return n.collectionGroup!==null}function st(n){const e=k(n);if(e.dt===null){e.dt=[];const t=Tf(e),s=wf(e);if(t!==null&&s===null)t.isKeyField()||e.dt.push(new Lt(t)),e.dt.push(new Lt(Y.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Lt(Y.keyField(),r))}}}return e.dt}function _e(n){const e=k(n);if(!e._t)if(e.limitType==="F")e._t=co(e.path,e.collectionGroup,st(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of st(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new Lt(r.field,o))}const s=e.endAt?new Yn(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Yn(e.startAt.position,e.startAt.inclusive):null;e._t=co(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e._t}function di(n,e,t){return new _s(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ss(n,e){return nr(_e(n),_e(e))&&n.limitType===e.limitType}function _u(n){return`${tr(_e(n))}|lt:${n.limitType}`}function fi(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>Tu(s)).join(", ")}]`),Es(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>lt(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>lt(s)).join(",")),`Target(${t})`}(_e(n))}; limitType=${n.limitType})`}function ks(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):v.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of st(t))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,o){const a=oo(i,r,o);return i.inclusive?a<=0:a<0}(t.startAt,st(t),s)||t.endAt&&!function(i,r,o){const a=oo(i,r,o);return i.inclusive?a>=0:a>0}(t.endAt,st(t),s))}(n,e)}function Ef(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Su(n){return(e,t)=>{let s=!1;for(const i of st(n)){const r=_f(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function _f(n,e,t){const s=n.field.isKeyField()?v.comparator(e.key,t.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?ct(a,u):_()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return _()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n,e){if(n.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xn(e)?"-0":e}}function Au(n){return{integerValue:""+n}}function Sf(n,e){return rf(e)?Au(e):ku(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this._=void 0}}function kf(n,e,t){return n instanceof Jn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof Qt?bu(n,e):n instanceof Xt?Ru(n,e):function(s,i){const r=Cu(s,i),o=ho(r)+ho(s.gt);return ci(r)&&ci(s.gt)?Au(o):ku(s.yt,o)}(n,e)}function Af(n,e,t){return n instanceof Qt?bu(n,e):n instanceof Xt?Ru(n,e):t}function Cu(n,e){return n instanceof Zn?ci(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class Jn extends As{}class Qt extends As{constructor(e){super(),this.elements=e}}function bu(n,e){const t=Nu(e);for(const s of n.elements)t.some(i=>fe(i,s))||t.push(s);return{arrayValue:{values:t}}}class Xt extends As{constructor(e){super(),this.elements=e}}function Ru(n,e){let t=Nu(e);for(const s of n.elements)t=t.filter(i=>!fe(i,s));return{arrayValue:{values:t}}}class Zn extends As{constructor(e,t){super(),this.yt=e,this.gt=t}}function ho(n){return x(n.integerValue||n.doubleValue)}function Nu(n){return er(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Cf(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Qt&&s instanceof Qt||t instanceof Xt&&s instanceof Xt?at(t.elements,s.elements,fe):t instanceof Zn&&s instanceof Zn?fe(t.gt,s.gt):t instanceof Jn&&s instanceof Jn}(n.transform,e.transform)}class bf{constructor(e,t){this.version=e,this.transformResults=t}}class we{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new we}static exists(e){return new we(void 0,e)}static updateTime(e){return new we(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xn(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Cs{}function Du(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Lu(n.key,we.none()):new wn(n.key,n.data,we.none());{const t=n.data,s=ie.empty();let i=new q(Y.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Xe(n.key,s,new ue(i.toArray()),we.none())}}function Rf(n,e,t){n instanceof wn?function(s,i,r){const o=s.value.clone(),a=go(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Xe?function(s,i,r){if(!xn(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=go(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ou(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Pt(n,e,t,s){return n instanceof wn?function(i,r,o,a){if(!xn(i.precondition,r))return o;const u=i.value.clone(),c=po(i.fieldTransforms,a,r);return u.setAll(c),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Xe?function(i,r,o,a){if(!xn(i.precondition,r))return o;const u=po(i.fieldTransforms,a,r),c=r.data;return c.setAll(Ou(i)),c.setAll(u),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(l=>l.field))}(n,e,t,s):function(i,r,o){return xn(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(n,e,t)}function Nf(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=Cu(s.transform,i||null);r!=null&&(t===null&&(t=ie.empty()),t.set(s.field,r))}return t||null}function fo(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&at(t,s,(i,r)=>Cf(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wn extends Cs{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xe extends Cs{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ou(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function go(n,e,t){const s=new Map;D(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Af(o,a,t[i]))}return s}function po(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,kf(r,o,e))}return s}class Lu extends Cs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Df extends Cs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M,b;function Lf(n){switch(n){default:return _();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Pu(n){if(n===void 0)return Ee("GRPC error has no .code"),f.UNKNOWN;switch(n){case M.OK:return f.OK;case M.CANCELLED:return f.CANCELLED;case M.UNKNOWN:return f.UNKNOWN;case M.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case M.INTERNAL:return f.INTERNAL;case M.UNAVAILABLE:return f.UNAVAILABLE;case M.UNAUTHENTICATED:return f.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case M.NOT_FOUND:return f.NOT_FOUND;case M.ALREADY_EXISTS:return f.ALREADY_EXISTS;case M.PERMISSION_DENIED:return f.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case M.ABORTED:return f.ABORTED;case M.OUT_OF_RANGE:return f.OUT_OF_RANGE;case M.UNIMPLEMENTED:return f.UNIMPLEMENTED;case M.DATA_LOSS:return f.DATA_LOSS;default:return _()}}(b=M||(M={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wt(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return fu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new $(v.comparator);function Se(){return Pf}const Mu=new $(v.comparator);function Rt(...n){let e=Mu;for(const t of n)e=e.insert(t.key,t);return e}function xu(n){let e=Mu;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function $e(){return Mt()}function Uu(){return Mt()}function Mt(){return new Tt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Mf=new $(v.comparator),xf=new q(v.comparator);function C(...n){let e=xf;for(const t of n)e=e.add(t);return e}const Uf=new q(R);function Fu(){return Uf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,Tn.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new bs(S.min(),i,Fu(),Se(),C())}}class Tn{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Tn(s,t,C(),C(),C())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,s,i){this.It=e,this.removedTargetIds=t,this.key=s,this.Tt=i}}class Vu{constructor(e,t){this.targetId=e,this.Et=t}}class qu{constructor(e,t,s=ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class mo{constructor(){this.At=0,this.Rt=vo(),this.bt=ee.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=C(),t=C(),s=C();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:_()}}),new Tn(this.bt,this.Pt,e,t,s)}xt(){this.vt=!1,this.Rt=vo()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Ff{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Se(),this.qt=yo(),this.Ut=new q(R)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const s=this.Wt(t);switch(e.state){case 0:this.zt(t)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),s.Dt(e.resumeToken));break;default:_()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((s,i)=>{this.zt(i)&&t(i)})}Jt(e){const t=e.targetId,s=e.Et.count,i=this.Yt(t);if(i){const r=i.target;if(hi(r))if(s===0){const o=new v(r.path);this.Qt(t,o,X.newNoDocument(o,S.min()))}else D(s===1);else this.Xt(t)!==s&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&hi(a.target)){const u=new v(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,X.newNoDocument(u,e))}r.St&&(t.set(o,r.Ct()),r.xt())}});let s=C();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Yt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new bs(e,t,this.Ut,this.Lt,s);return this.Lt=Se(),this.qt=yo(),this.Ut=new q(R),i}Gt(e,t){if(!this.zt(e))return;const s=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,s),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),s&&(this.Lt=this.Lt.insert(t,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new mo,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new q(R),this.qt=this.qt.insert(e,t)),t}zt(e){const t=this.Yt(e)!==null;return t||y("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new mo),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function yo(){return new $(v.comparator)}function vo(){return new $(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$f=(()=>({and:"AND",or:"OR"}))();class Bf{constructor(e,t){this.databaseId=e,this.wt=t}}function es(n,e){return n.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $u(n,e){return n.wt?e.toBase64():e.toUint8Array()}function jf(n,e){return es(n,e.toTimestamp())}function de(n){return D(!!n),S.fromTimestamp(function(e){const t=Le(e);return new V(t.seconds,t.nanos)}(n))}function ir(n,e){return function(t){return new L(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Bu(n){const e=L.fromString(n);return D(Hu(e)),e}function gi(n,e){return ir(n.databaseId,e.path)}function Ks(n,e){const t=Bu(e);if(t.get(1)!==n.databaseId.projectId)throw new I(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new I(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(ju(t))}function pi(n,e){return ir(n.databaseId,e)}function Kf(n){const e=Bu(n);return e.length===4?L.emptyPath():ju(e)}function mi(n){return new L(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ju(n){return D(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function wo(n,e,t){return{name:gi(n,e),fields:t.value.mapValue.fields}}function Gf(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,c){return u.wt?(D(c===void 0||typeof c=="string"),ee.fromBase64String(c||"")):(D(c===void 0||c instanceof Uint8Array),ee.fromUint8Array(c||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?f.UNKNOWN:Pu(u.code);return new I(c,u.message||"")}(o);t=new qu(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ks(n,s.document.name),r=de(s.document.updateTime),o=s.document.createTime?de(s.document.createTime):S.min(),a=new ie({mapValue:{fields:s.document.fields}}),u=X.newFoundDocument(i,r,o,a),c=s.targetIds||[],l=s.removedTargetIds||[];t=new Un(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ks(n,s.document),r=s.readTime?de(s.readTime):S.min(),o=X.newNoDocument(i,r),a=s.removedTargetIds||[];t=new Un([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ks(n,s.document),r=s.removedTargetIds||[];t=new Un([],r,i,null)}else{if(!("filter"in e))return _();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Of(i),o=s.targetId;t=new Vu(o,r)}}return t}function Hf(n,e){let t;if(e instanceof wn)t={update:wo(n,e.key,e.value)};else if(e instanceof Lu)t={delete:gi(n,e.key)};else if(e instanceof Xe)t={update:wo(n,e.key,e.data),updateMask:tg(e.fieldMask)};else{if(!(e instanceof Df))return _();t={verify:gi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Jn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Qt)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xt)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Zn)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw _()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jf(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_()}(n,e.precondition)),t}function zf(n,e){return n&&n.length>0?(D(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?de(s.updateTime):de(i);return r.isEqual(S.min())&&(r=de(i)),new bf(r,s.transformResults||[])}(t,e))):[]}function Wf(n,e){return{documents:[pi(n,e.path)]}}function Qf(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=pi(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=pi(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return Gu(ge.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:Je(l.field),direction:Jf(l.dir)}}(c))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(u,c){return u.wt||Es(c)?c:{value:c}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),t}function Xf(n){let e=Kf(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){D(s===1);const l=t.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let r=[];t.where&&(r=function(l){const h=Ku(l);return h instanceof ge&&vu(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Lt(Ze(h.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Es(h)?null:h}(t.limit));let u=null;t.startAt&&(u=function(l){const h=!!l.before,g=l.values||[];return new Yn(g,h)}(t.startAt));let c=null;return t.endAt&&(c=function(l){const h=!l.before,g=l.values||[];return new Yn(g,h)}(t.endAt)),vf(e,i,o,r,a,"F",u,c)}function Yf(n,e){const t=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return _()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ku(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ze(e.unaryFilter.field);return F.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=Ze(e.unaryFilter.field);return F.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ze(e.unaryFilter.field);return F.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ze(e.unaryFilter.field);return F.create(r,"!=",{nullValue:"NULL_VALUE"});default:return _()}}(n):n.fieldFilter!==void 0?function(e){return F.create(Ze(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ge.create(e.compositeFilter.filters.map(t=>Ku(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return _()}}(e.compositeFilter.op))}(n):_()}function Jf(n){return Vf[n]}function Zf(n){return qf[n]}function eg(n){return $f[n]}function Je(n){return{fieldPath:n.canonicalString()}}function Ze(n){return Y.fromServerFormat(n.fieldPath)}function Gu(n){return n instanceof F?function(e){if(e.op==="=="){if(ro(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NAN"}};if(io(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ro(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NOT_NAN"}};if(io(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Je(e.field),op:Zf(e.op),value:e.value}}}(n):n instanceof ge?function(e){const t=e.getFilters().map(s=>Gu(s));return t.length===1?t[0]:{compositeFilter:{op:eg(e.op),filters:t}}}(n):_()}function tg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Hu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Rf(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Pt(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Pt(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Uu();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(i.key)?null:a;const u=Du(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(S.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),C())}isEqual(e){return this.batchId===e.batchId&&at(this.mutations,e.mutations,(t,s)=>fo(t,s))&&at(this.baseMutations,e.baseMutations,(t,s)=>fo(t,s))}}class rr{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){D(e.mutations.length===s.length);let i=Mf;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new rr(e,t,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,t,s,i,r=S.min(),o=S.min(),a=ee.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ke(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.ie=e}}function rg(n){const e=Xf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?di(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.Je=new ag}addToCollectionParentIndex(e,t){return this.Je.add(t),d.resolve()}getCollectionParents(e,t){return d.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return d.resolve()}deleteFieldIndex(e,t){return d.resolve()}getDocumentsMatchingTarget(e,t){return d.resolve(null)}getIndexType(e,t){return d.resolve(0)}getFieldIndexes(e,t){return d.resolve([])}getNextCollectionGroupToUpdate(e){return d.resolve(null)}getMinOffset(e,t){return d.resolve(Oe.min())}getMinOffsetFromCollectionGroup(e,t){return d.resolve(Oe.min())}updateCollectionGroup(e,t,s){return d.resolve()}updateIndexEntries(e,t){return d.resolve()}}class ag{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new q(L.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new q(L.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ht(0)}static vn(){return new ht(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.changes=new Tt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,X.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?d.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&Pt(s.mutation,i,ue.empty(),V.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,C()).next(()=>s))}getLocalViewOfDocuments(e,t,s=C()){const i=$e();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let o=Rt();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=$e();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,C()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,i){let r=Se();const o=Mt(),a=Mt();return t.forEach((u,c)=>{const l=s.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof Xe)?r=r.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Pt(l.mutation,c,l.mutation.getFieldMask(),V.now())):o.set(c.key,ue.empty())}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((c,l)=>o.set(c,l)),t.forEach((c,l)=>{var h;return a.set(c,new cg(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Mt();let i=new $((o,a)=>o-a),r=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let l=s.get(u)||ue.empty();l=a.applyToLocalView(c,l),s.set(u,l);const h=(i.get(a.batchId)||C()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Uu();l.forEach(g=>{if(!r.has(g)){const p=Du(t.get(g),s.get(g));p!==null&&h.set(g,p),r=r.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return d.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return v.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):If(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):d.resolve($e());let a=-1,u=r;return o.next(c=>d.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(l)?d.resolve():this.remoteDocumentCache.getEntry(e,l).next(g=>{u=u.insert(l,g)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,u,c,C())).next(l=>({batchId:a,changes:xu(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new v(t)).next(s=>{let i=Rt();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=Rt();return this.indexManager.getCollectionParents(e,i).next(o=>d.forEach(o,a=>{const u=function(c,l){return new _s(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(c=>{c.forEach((l,h)=>{r=r.insert(l,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i))).next(r=>{i.forEach((a,u)=>{const c=u.getKey();r.get(c)===null&&(r=r.insert(c,X.newInvalidDocument(c)))});let o=Rt();return r.forEach((a,u)=>{const c=i.get(a);c!==void 0&&Pt(c.mutation,u,ue.empty(),V.now()),ks(t,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return d.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:de(s.createTime)}),d.resolve()}getNamedQuery(e,t){return d.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(s){return{name:s.name,query:rg(s.bundledQuery),readTime:de(s.readTime)}}(t)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.overlays=new $(v.comparator),this.es=new Map}getOverlay(e,t){return d.resolve(this.overlays.get(t))}getOverlays(e,t){const s=$e();return d.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.oe(e,t,r)}),d.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),d.resolve()}getOverlaysForCollection(e,t,s){const i=$e(),r=t.length+1,o=new v(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new $((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>s){let l=r.get(c.largestBatchId);l===null&&(l=$e(),r=r.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=$e(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return d.resolve(a)}oe(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sg(t,s));let r=this.es.get(t);r===void 0&&(r=C(),this.es.set(t,r)),this.es.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.ns=new q(B.ss),this.rs=new q(B.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const s=new B(e,t);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.cs(new B(e,t))}hs(e,t){e.forEach(s=>this.removeReference(s,t))}ls(e){const t=new v(new L([])),s=new B(t,e),i=new B(t,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new v(new L([])),s=new B(t,e),i=new B(t,e+1);let r=C();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new B(e,0),s=this.ns.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class B{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return v.comparator(e.key,t.key)||R(e._s,t._s)}static os(e,t){return R(e._s,t._s)||v.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new q(B.ss)}checkEmpty(e){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ng(r,t,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new B(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(e,t){return d.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.ps(s),r=i<0?0:i;return d.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new B(t,0),i=new B(t,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new q(R);return t.forEach(i=>{const r=new B(i,0),o=new B(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),d.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;v.isDocumentKey(r)||(r=r.child(""));const o=new B(new v(r),0);let a=new q(R);return this.gs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(u._s)),!0)},o),d.resolve(this.Is(a))}Is(e){const t=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){D(this.Ts(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return d.forEach(t.mutations,i=>{const r=new B(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,t){const s=new B(t,0),i=this.gs.firstAfterOrEqual(s);return d.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,d.resolve()}Ts(e,t){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.Es=e,this.docs=new $(v.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return d.resolve(s?s.document.mutableCopy():X.newInvalidDocument(t))}getEntries(e,t){let s=Se();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():X.newInvalidDocument(i))}),d.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=Se();const o=t.path,a=new v(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ef(Zd(l),s)<=0||(i.has(l.key)||ks(t,l))&&(r=r.insert(l.key,l.mutableCopy()))}return d.resolve(r)}getAllFromCollectionGroup(e,t,s,i){_()}As(e,t){return d.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new pg(this)}getSize(e){return d.resolve(this.size)}}class pg extends ug{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),d.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.persistence=e,this.Rs=new Tt(t=>tr(t),nr),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.bs=0,this.Ps=new or,this.targetCount=0,this.vs=ht.Pn()}forEachTarget(e,t){return this.Rs.forEach((s,i)=>t(i)),d.resolve()}getLastRemoteSnapshotVersion(e){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return d.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),d.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new ht(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,d.resolve()}updateTargetData(e,t){return this.Dn(t),d.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,d.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(e){return d.resolve(this.targetCount)}getTargetData(e,t){const s=this.Rs.get(t)||null;return d.resolve(s)}addMatchingKeys(e,t,s){return this.Ps.us(t,s),d.resolve()}removeMatchingKeys(e,t,s){this.Ps.hs(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),d.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ps.ds(t);return d.resolve(s)}containsKey(e,t){return d.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Zi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new mg(this),this.indexManager=new og,this.remoteDocumentCache=function(s){return new gg(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new ig(t),this.Ns=new hg(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new dg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Vs[e.toKey()];return s||(s=new fg(t,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,s){y("MemoryPersistence","Starting transaction:",e);const i=new vg(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,t){return d.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,t)))}}class vg extends nf{constructor(e){super(),this.currentSequenceNumber=e}}class ar{constructor(e){this.persistence=e,this.Fs=new or,this.$s=null}static Bs(e){return new ar(e)}get Ls(){if(this.$s)return this.$s;throw _()}addReference(e,t,s){return this.Fs.addReference(s,t),this.Ls.delete(s.toString()),d.resolve()}removeReference(e,t,s){return this.Fs.removeReference(s,t),this.Ls.add(s.toString()),d.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),d.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Ls,s=>{const i=v.fromPath(s);return this.qs(e,i).next(r=>{r||t.removeEntry(i,S.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(s=>{s?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return d.or([()=>d.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Si=s,this.Di=i}static Ci(e,t){let s=C(),i=C();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ur(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,s,i){return this.ki(e,t).next(r=>r||this.Oi(e,t,i,s)).next(r=>r||this.Mi(e,t))}ki(e,t){if(lo(t))return d.resolve(null);let s=_e(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=di(t,null,"F"),s=_e(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=C(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const c=this.Fi(t,a);return this.$i(t,c,o,u.readTime)?this.ki(e,di(t,null,"F")):this.Bi(e,c,t,u)}))})))}Oi(e,t,s,i){return lo(t)||i.isEqual(S.min())?this.Mi(e,t):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(t,r);return this.$i(t,o,s,i)?this.Mi(e,t):(to()<=rt.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fi(t)),this.Bi(e,o,t,Jd(i,-1)))})}Fi(e,t){let s=new q(Su(e));return t.forEach((i,r)=>{ks(e,r)&&(s=s.add(r))}),s}$i(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,t){return to()<=rt.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",fi(t)),this.Ni.getDocumentsMatchingQuery(e,t,Oe.min())}Bi(e,t,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,t,s,i){this.persistence=e,this.Li=t,this.yt=i,this.qi=new $(R),this.Ui=new Tt(r=>tr(r),nr),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lg(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function Ig(n,e,t,s){return new Tg(n,e,t,s)}async function zu(n,e){const t=k(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.Qi(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=C();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of r){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(s,u).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function Eg(n,e){const t=k(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const l=u.batch,h=l.keys();let g=d.resolve();return h.forEach(p=>{g=g.next(()=>c.getEntry(a,p)).next(w=>{const A=u.docVersions.get(p);D(A!==null),w.version.compareTo(A)<0&&(l.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=C();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function Wu(n){const e=k(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}function _g(n,e){const t=k(n),s=e.snapshotVersion;let i=t.qi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Gi.newChangeBuffer({trackRemovals:!0});i=t.qi;const a=[];e.targetChanges.forEach((l,h)=>{const g=i.get(h);if(!g)return;a.push(t.Cs.removeMatchingKeys(r,l.removedDocuments,h).next(()=>t.Cs.addMatchingKeys(r,l.addedDocuments,h)));let p=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ee.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,s)),i=i.insert(h,p),function(w,A,N){return w.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(g,p,l)&&a.push(t.Cs.updateTargetData(r,p))});let u=Se(),c=C();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,l))}),a.push(Sg(r,o,e.documentUpdates).next(l=>{u=l.Wi,c=l.zi})),!s.isEqual(S.min())){const l=t.Cs.getLastRemoteSnapshotVersion(r).next(h=>t.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(l)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(r=>(t.qi=i,r))}function Sg(n,e,t){let s=C(),i=C();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let o=Se();return t.forEach((a,u)=>{const c=r.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(S.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function kg(n,e){const t=k(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ag(n,e){const t=k(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Cs.getTargetData(s,e).next(r=>r?(i=r,d.resolve(i)):t.Cs.allocateTargetId(s).next(o=>(i=new Ke(e,o,0,s.currentSequenceNumber),t.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.qi=t.qi.insert(s.targetId,s),t.Ui.set(e,s.targetId)),s})}async function yi(n,e,t){const s=k(n),i=s.qi.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vn(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function To(n,e,t){const s=k(n);let i=S.min(),r=C();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=k(a),h=l.Ui.get(c);return h!==void 0?d.resolve(l.qi.get(h)):l.Cs.getTargetData(u,c)}(s,o,_e(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,t?i:S.min(),t?r:C())).next(a=>(Cg(s,Ef(e),a),{documents:a,Hi:r})))}function Cg(n,e,t){let s=n.Ki.get(e)||S.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Ki.set(e,s)}class Io{constructor(){this.activeTargetIds=Fu()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bg{constructor(){this.Lr=new Io,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,s){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Io,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,s,i,r){const o=this.ho(e,t);y("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(u=>(y("RestConnection","Received: ",u),u),u=>{throw ai("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",s),u})}_o(e,t,s,i,r,o){return this.ao(e,t,s,i,r)}lo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+vt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,t){const s=Ng[e];return`${this.oo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,s,i){return new Promise((r,o)=>{const a=new Bd;a.setWithCredentials(!0),a.listenOnce(Vd.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case js.NO_ERROR:const c=a.getResponseJson();y("Connection","XHR received:",JSON.stringify(c)),r(c);break;case js.TIMEOUT:y("Connection",'RPC "'+e+'" timed out'),o(new I(f.DEADLINE_EXCEEDED,"Request time out"));break;case js.HTTP_ERROR:const l=a.getStatus();if(y("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const g=h==null?void 0:h.error;if(g&&g.status&&g.message){const p=function(w){const A=w.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(A)>=0?A:f.UNKNOWN}(g.status);o(new I(p,g.message))}else o(new I(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(f.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{y("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(t,"POST",u,s,15)})}wo(e,t,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Ud(),o=Fd(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new $d({})),this.lo(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const u=i.join("");y("Connection","Creating WebChannel: "+u,a);const c=r.createWebChannel(u,a);let l=!1,h=!1;const g=new Dg({Hr:w=>{h?y("Connection","Not sending because WebChannel is closed:",w):(l||(y("Connection","Opening WebChannel transport."),c.open(),l=!0),y("Connection","WebChannel sending:",w),c.send(w))},Jr:()=>c.close()}),p=(w,A,N)=>{w.listen(A,W=>{try{N(W)}catch(U){setTimeout(()=>{throw U},0)}})};return p(c,bn.EventType.OPEN,()=>{h||y("Connection","WebChannel transport opened.")}),p(c,bn.EventType.CLOSE,()=>{h||(h=!0,y("Connection","WebChannel transport closed"),g.io())}),p(c,bn.EventType.ERROR,w=>{h||(h=!0,ai("Connection","WebChannel transport errored:",w),g.io(new I(f.UNAVAILABLE,"The operation could not be completed")))}),p(c,bn.EventType.MESSAGE,w=>{var A;if(!h){const N=w.data[0];D(!!N);const W=N,U=W.error||((A=W[0])===null||A===void 0?void 0:A.error);if(U){y("Connection","WebChannel received error:",U);const ke=U.status;let pe=function(Et){const _t=M[Et];if(_t!==void 0)return Pu(_t)}(ke),Ue=U.message;pe===void 0&&(pe=f.INTERNAL,Ue="Unknown error status: "+ke+" with message "+U.message),h=!0,g.io(new I(pe,Ue)),c.close()}else y("Connection","WebChannel received:",N),g.ro(N)}}),p(o,qd.STAT_EVENT,w=>{w.stat===Zr.PROXY?y("Connection","Detected buffering proxy"):w.stat===Zr.NOPROXY&&y("Connection","Detected no buffering proxy")}),setTimeout(()=>{g.so()},0),g}}function Gs(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(n){return new Bf(n,!0)}class Qu{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=t,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,t-s);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,s,i,r,o,a,u){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Qu(e,t)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(Ee(t.toString()),Ee("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===t&&this.Go(s,i)},s=>{e(()=>{const i=new I(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,t){const s=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lg extends Xu{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.yt=r}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=Gf(this.yt,e),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?de(r.readTime):S.min()}(e);return this.listener.Wo(t,s)}zo(e){const t={};t.database=mi(this.yt),t.addTarget=function(i,r){let o;const a=r.target;return o=hi(a)?{documents:Wf(i,a)}:{query:Qf(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=$u(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=es(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Yf(this.yt,e);s&&(t.labels=s),this.Bo(t)}Ho(e){const t={};t.database=mi(this.yt),t.removeTarget=e,this.Bo(t)}}class Pg extends Xu{constructor(e,t,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(D(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=zf(e.writeResults,e.commitTime),s=de(e.commitTime);return this.listener.Zo(s,t)}return D(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=mi(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Hf(this.yt,s))};this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new I(f.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(f.UNKNOWN,i.toString())})}_o(e,t,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,t,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(f.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class xg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ee(t),this.ou=!1):y("OnlineStateTracker",t)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Ye(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=k(a);u._u.add(4),await In(u),u.gu.set("Unknown"),u._u.delete(4),await Ns(u)}(this))})}),this.gu=new xg(s,i)}}async function Ns(n){if(Ye(n))for(const e of n.wu)await e(!0)}async function In(n){for(const e of n.wu)await e(!1)}function Yu(n,e){const t=k(n);t.du.has(e.targetId)||(t.du.set(e.targetId,e),hr(t)?lr(t):It(t).ko()&&cr(t,e))}function Ju(n,e){const t=k(n),s=It(t);t.du.delete(e),s.ko()&&Zu(t,e),t.du.size===0&&(s.ko()?s.Fo():Ye(t)&&t.gu.set("Unknown"))}function cr(n,e){n.yu.Ot(e.targetId),It(n).zo(e)}function Zu(n,e){n.yu.Ot(e),It(n).Ho(e)}function lr(n){n.yu=new Ff({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.du.get(e)||null}),It(n).start(),n.gu.uu()}function hr(n){return Ye(n)&&!It(n).No()&&n.du.size>0}function Ye(n){return k(n)._u.size===0}function ec(n){n.yu=void 0}async function Fg(n){n.du.forEach((e,t)=>{cr(n,e)})}async function Vg(n,e){ec(n),hr(n)?(n.gu.hu(e),lr(n)):n.gu.set("Unknown")}async function qg(n,e,t){if(n.gu.set("Online"),e instanceof qu&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(n,e)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ts(n,s)}else if(e instanceof Un?n.yu.Kt(e):e instanceof Vu?n.yu.Jt(e):n.yu.jt(e),!t.isEqual(S.min()))try{const s=await Wu(n.localStore);t.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.du.get(u);c&&i.du.set(u,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(ee.EMPTY_BYTE_STRING,u.snapshotVersion)),Zu(i,a);const c=new Ke(u.target,a,1,u.sequenceNumber);cr(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await ts(n,s)}}async function ts(n,e,t){if(!vn(e))throw e;n._u.add(1),await In(n),n.gu.set("Offline"),t||(t=()=>Wu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await t(),n._u.delete(1),await Ns(n)})}function tc(n,e){return e().catch(t=>ts(n,t,e))}async function Ds(n){const e=k(n),t=Pe(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;$g(e);)try{const i=await kg(e.localStore,s);if(i===null){e.fu.length===0&&t.Fo();break}s=i.batchId,Bg(e,i)}catch(i){await ts(e,i)}nc(e)&&sc(e)}function $g(n){return Ye(n)&&n.fu.length<10}function Bg(n,e){n.fu.push(e);const t=Pe(n);t.ko()&&t.Yo&&t.Xo(e.mutations)}function nc(n){return Ye(n)&&!Pe(n).No()&&n.fu.length>0}function sc(n){Pe(n).start()}async function jg(n){Pe(n).eu()}async function Kg(n){const e=Pe(n);for(const t of n.fu)e.Xo(t.mutations)}async function Gg(n,e,t){const s=n.fu.shift(),i=rr.from(s,e,t);await tc(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ds(n)}async function Hg(n,e){e&&Pe(n).Yo&&await async function(t,s){if(i=s.code,Lf(i)&&i!==f.ABORTED){const r=t.fu.shift();Pe(t).Mo(),await tc(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Ds(t)}var i}(n,e),nc(n)&&sc(n)}async function _o(n,e){const t=k(n);t.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=Ye(t);t._u.add(3),await In(t),s&&t.gu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t._u.delete(3),await Ns(t)}async function zg(n,e){const t=k(n);e?(t._u.delete(2),await Ns(t)):e||(t._u.add(2),await In(t),t.gu.set("Unknown"))}function It(n){return n.pu||(n.pu=function(e,t,s){const i=k(e);return i.su(),new Lg(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(n.datastore,n.asyncQueue,{Yr:Fg.bind(null,n),Zr:Vg.bind(null,n),Wo:qg.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Mo(),hr(n)?lr(n):n.gu.set("Unknown")):(await n.pu.stop(),ec(n))})),n.pu}function Pe(n){return n.Iu||(n.Iu=function(e,t,s){const i=k(e);return i.su(),new Pg(t,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(n.datastore,n.asyncQueue,{Yr:jg.bind(null,n),Zr:Hg.bind(null,n),tu:Kg.bind(null,n),Zo:Gg.bind(null,n)}),n.wu.push(async e=>{e?(n.Iu.Mo(),await Ds(n)):(await n.Iu.stop(),n.fu.length>0&&(y("RemoteStore",`Stopping write stream with ${n.fu.length} pending writes`),n.fu=[]))})),n.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new De,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,a=new dr(e,t,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fr(n,e){if(Ee("AsyncQueue",`${e}: ${n}`),vn(n))return new I(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e?(t,s)=>e(t,s)||v.comparator(t.key,s.key):(t,s)=>v.comparator(t.key,s.key),this.keyedMap=Rt(),this.sortedSet=new $(this.comparator)}static emptySet(e){return new it(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new it;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.Tu=new $(v.comparator)}track(e){const t=e.doc.key,s=this.Tu.get(t);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(t,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(t):e.type===1&&s.type===2?this.Tu=this.Tu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):_():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,s)=>{e.push(s)}),e}}class dt{constructor(e,t,s,i,r,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new dt(e,t,it.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ss(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.Au=void 0,this.listeners=[]}}class Qg{constructor(){this.queries=new Tt(e=>_u(e),Ss),this.onlineState="Unknown",this.Ru=new Set}}async function Xg(n,e){const t=k(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new Wg),i)try{r.Au=await t.onListen(s)}catch(o){const a=fr(o,`Initialization of query '${fi(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.listeners.push(e),e.bu(t.onlineState),r.Au&&e.Pu(r.Au)&&gr(t)}async function Yg(n,e){const t=k(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function Jg(n,e){const t=k(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&gr(t)}function Zg(n,e,t){const s=k(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function gr(n){n.Ru.forEach(e=>{e.next()})}class ep{constructor(e,t,s){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new dt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}xu(e){e=dt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this.key=e}}class rc{constructor(e){this.key=e}}class tp{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=C(),this.mutatedKeys=C(),this.Gu=Su(e),this.Qu=new it(this.Gu)}get ju(){return this.qu}Wu(e,t){const s=t?t.zu:new So,i=t?t.Qu:this.Qu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const g=i.get(l),p=ks(this.query,h)?h:null,w=!!g&&this.mutatedKeys.has(g.key),A=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let N=!1;g&&p?g.data.isEqual(p.data)?w!==A&&(s.track({type:3,doc:p}),N=!0):this.Hu(g,p)||(s.track({type:2,doc:p}),N=!0,(u&&this.Gu(p,u)>0||c&&this.Gu(p,c)<0)&&(a=!0)):!g&&p?(s.track({type:0,doc:p}),N=!0):g&&!p&&(s.track({type:1,doc:g}),N=!0,(u||c)&&(a=!0)),N&&(p?(o=o.add(p),r=A?r.add(l):r.delete(l)):(o=o.delete(l),r=r.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),r=r.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((c,l)=>function(h,g){const p=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _()}};return p(h)-p(g)}(c.type,l.type)||this.Gu(c.doc,l.doc)),this.Ju(s);const o=t?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.Uu;return this.Uu=a,r.length!==0||u?{snapshot:new dt(this.query,e.Qu,i,r,e.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new So,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(t=>this.qu=this.qu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qu=this.qu.delete(t)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=C(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const t=[];return e.forEach(s=>{this.Ku.has(s)||t.push(new rc(s))}),this.Ku.forEach(s=>{e.has(s)||t.push(new ic(s))}),t}tc(e){this.qu=e.Hi,this.Ku=C();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return dt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class np{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class sp{constructor(e){this.key=e,this.nc=!1}}class ip{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Tt(a=>_u(a),Ss),this.rc=new Map,this.oc=new Set,this.uc=new $(v.comparator),this.cc=new Map,this.ac=new or,this.hc={},this.lc=new Map,this.fc=ht.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function rp(n,e){const t=pp(n);let s,i;const r=t.ic.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await Ag(t.localStore,_e(e));t.isPrimaryClient&&Yu(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await op(t,e,s,a==="current",o.resumeToken)}return i}async function op(n,e,t,s,i){n._c=(h,g,p)=>async function(w,A,N,W){let U=A.view.Wu(N);U.$i&&(U=await To(w.localStore,A.query,!1).then(({documents:Ue})=>A.view.Wu(Ue,U)));const ke=W&&W.targetChanges.get(A.targetId),pe=A.view.applyChanges(U,w.isPrimaryClient,ke);return Ao(w,A.targetId,pe.Xu),pe.snapshot}(n,h,g,p);const r=await To(n.localStore,e,!0),o=new tp(e,r.Hi),a=o.Wu(r.documents),u=Tn.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,u);Ao(n,t,c.Xu);const l=new np(e,t,o);return n.ic.set(e,l),n.rc.has(t)?n.rc.get(t).push(e):n.rc.set(t,[e]),c.snapshot}async function ap(n,e){const t=k(n),s=t.ic.get(e),i=t.rc.get(s.targetId);if(i.length>1)return t.rc.set(s.targetId,i.filter(r=>!Ss(r,e))),void t.ic.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await yi(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Ju(t.remoteStore,s.targetId),vi(t,s.targetId)}).catch(yn)):(vi(t,s.targetId),await yi(t.localStore,s.targetId,!0))}async function up(n,e,t){const s=mp(n);try{const i=await function(r,o){const a=k(r),u=V.now(),c=o.reduce((g,p)=>g.add(p.key),C());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let p=Se(),w=C();return a.Gi.getEntries(g,c).next(A=>{p=A,p.forEach((N,W)=>{W.isValidDocument()||(w=w.add(N))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,p)).next(A=>{l=A;const N=[];for(const W of o){const U=Nf(W,l.get(W.key).overlayedDocument);U!=null&&N.push(new Xe(W.key,U,Eu(U.value.mapValue),we.exists(!0)))}return a.mutationQueue.addMutationBatch(g,u,N,o)}).next(A=>{h=A;const N=A.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(g,A.batchId,N)})}).then(()=>({batchId:h.batchId,changes:xu(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.hc[r.currentUser.toKey()];u||(u=new $(R)),u=u.insert(o,a),r.hc[r.currentUser.toKey()]=u}(s,i.batchId,t),await En(s,i.changes),await Ds(s.remoteStore)}catch(i){const r=fr(i,"Failed to persist write");t.reject(r)}}async function oc(n,e){const t=k(n);try{const s=await _g(t.localStore,e);e.targetChanges.forEach((i,r)=>{const o=t.cc.get(r);o&&(D(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?D(o.nc):i.removedDocuments.size>0&&(D(o.nc),o.nc=!1))}),await En(t,s,e)}catch(s){await yn(s)}}function ko(n,e,t){const s=k(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=k(r);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.bu(o)&&(u=!0)}),u&&gr(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function cp(n,e,t){const s=k(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new $(v.comparator);o=o.insert(r,X.newNoDocument(r,S.min()));const a=C().add(r),u=new bs(S.min(),new Map,new q(R),o,a);await oc(s,u),s.uc=s.uc.remove(r),s.cc.delete(e),pr(s)}else await yi(s.localStore,e,!1).then(()=>vi(s,e,t)).catch(yn)}async function lp(n,e){const t=k(n),s=e.batch.batchId;try{const i=await Eg(t.localStore,e);uc(t,s,null),ac(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await En(t,i)}catch(i){await yn(i)}}async function hp(n,e,t){const s=k(n);try{const i=await function(r,o){const a=k(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(l=>(D(l!==null),c=l.keys(),a.mutationQueue.removeMutationBatch(u,l))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,e);uc(s,e,t),ac(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await En(s,i)}catch(i){await yn(i)}}function ac(n,e){(n.lc.get(e)||[]).forEach(t=>{t.resolve()}),n.lc.delete(e)}function uc(n,e,t){const s=k(n);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function vi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.rc.get(e))n.ic.delete(s),t&&n.sc.wc(s,t);n.rc.delete(e),n.isPrimaryClient&&n.ac.ls(e).forEach(s=>{n.ac.containsKey(s)||cc(n,s)})}function cc(n,e){n.oc.delete(e.path.canonicalString());const t=n.uc.get(e);t!==null&&(Ju(n.remoteStore,t),n.uc=n.uc.remove(e),n.cc.delete(t),pr(n))}function Ao(n,e,t){for(const s of t)s instanceof ic?(n.ac.addReference(s.key,e),dp(n,s)):s instanceof rc?(y("SyncEngine","Document no longer in limbo: "+s.key),n.ac.removeReference(s.key,e),n.ac.containsKey(s.key)||cc(n,s.key)):_()}function dp(n,e){const t=e.key,s=t.path.canonicalString();n.uc.get(t)||n.oc.has(s)||(y("SyncEngine","New document in limbo: "+t),n.oc.add(s),pr(n))}function pr(n){for(;n.oc.size>0&&n.uc.size<n.maxConcurrentLimboResolutions;){const e=n.oc.values().next().value;n.oc.delete(e);const t=new v(L.fromString(e)),s=n.fc.next();n.cc.set(s,new sp(t)),n.uc=n.uc.insert(t,s),Yu(n.remoteStore,new Ke(_e(sr(t.path)),s,2,Zi.at))}}async function En(n,e,t){const s=k(n),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,u)=>{o.push(s._c(u,e,t).then(c=>{if((c||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=ur.Ci(u.targetId,c);r.push(l)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,u){const c=k(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>d.forEach(u,h=>d.forEach(h.Si,g=>c.persistence.referenceDelegate.addReference(l,h.targetId,g)).next(()=>d.forEach(h.Di,g=>c.persistence.referenceDelegate.removeReference(l,h.targetId,g)))))}catch(l){if(!vn(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const g=c.qi.get(h),p=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(p);c.qi=c.qi.insert(h,w)}}}(s.localStore,r))}async function fp(n,e){const t=k(n);if(!t.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const s=await zu(t.localStore,e);t.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new I(f.CANCELLED,r))})}),i.lc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await En(t,s.ji)}}function gp(n,e){const t=k(n),s=t.cc.get(e);if(s&&s.nc)return C().add(s.key);{let i=C();const r=t.rc.get(e);if(!r)return i;for(const o of r){const a=t.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function pp(n){const e=k(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=oc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cp.bind(null,e),e.sc.Wo=Jg.bind(null,e.eventManager),e.sc.wc=Zg.bind(null,e.eventManager),e}function mp(n){const e=k(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hp.bind(null,e),e}class yp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Rs(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return Ig(this.persistence,new wg,e.initialUser,this.yt)}yc(e){return new yg(ar.Bs,this.yt)}gc(e){return new bg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ko(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=fp.bind(null,this.syncEngine),await zg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Qg}createDatastore(e){const t=Rs(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Og(i));var i;return function(r,o,a,u){return new Mg(r,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>ko(this.syncEngine,a,0),o=Eo.C()?new Eo:new Rg,new Ug(t,s,i,r,o);var t,s,i,r,o}createSyncEngine(e,t){return function(s,i,r,o,a,u,c){const l=new ip(s,i,r,o,a,u);return c&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=k(e);y("RemoteStore","RemoteStore shutting down."),t._u.add(5),await In(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n,e,t){if(!t)throw new I(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Tp(n,e,t,s){if(e===!0&&s===!0)throw new I(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Co(n){if(!v.isDocumentKey(n))throw new I(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_()}function Yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new I(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mr(n);throw new I(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map;class Ro{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new I(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Tp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ro({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ro(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new jd;switch(t.type){case"gapi":const s=t.client;return new zd(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new I(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=bo.get(e);t&&(y("ComponentProvider","Removing Datastore"),bo.delete(e),t.terminate())}(this),Promise.resolve()}}function Ip(n,e,t,s={}){var i;const r=(n=Yt(n,yr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ai("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Q.MOCK_USER;else{o=xc(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new I(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Q(u)}n._authCredentials=new Kd(new hu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new re(this.firestore,e,this._key)}}class vr{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new vr(this.firestore,e,this._query)}}class Jt extends vr{constructor(e,t,s){super(e,t,sr(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new re(this.firestore,null,new v(e))}withConverter(e){return new Jt(this.firestore,e,this._path)}}function tm(n,e,...t){if(n=oe(n),arguments.length===1&&(e=du.R()),wp("doc","path",e),n instanceof yr){const s=L.fromString(e,...t);return Co(s),new re(n,null,new v(s))}{if(!(n instanceof re||n instanceof Jt))throw new I(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(L.fromString(e,...t));return Co(s),new re(n.firestore,n instanceof Jt?n.converter:null,new v(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ee("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=Q.UNAUTHENTICATED,this.clientId=du.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{y("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(y("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new De;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=fr(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Sp(n,e){n.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await zu(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function kp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ap(n);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>_o(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>_o(e.remoteStore,r)),n.onlineComponents=e}async function Ap(n){return n.offlineComponents||(y("FirestoreClient","Using default OfflineComponentProvider"),await Sp(n,new yp)),n.offlineComponents}async function lc(n){return n.onlineComponents||(y("FirestoreClient","Using default OnlineComponentProvider"),await kp(n,new vp)),n.onlineComponents}function Cp(n){return lc(n).then(e=>e.syncEngine)}async function bp(n){const e=await lc(n),t=e.eventManager;return t.onListen=rp.bind(null,e.syncEngine),t.onUnlisten=ap.bind(null,e.syncEngine),t}function Rp(n,e,t={}){const s=new De;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const c=new Ep({next:h=>{r.enqueueAndForget(()=>Yg(i,l));const g=h.docs.has(o);!g&&h.fromCache?u.reject(new I(f.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&h.fromCache&&a&&a.source==="server"?u.reject(new I(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new ep(sr(o.path),c,{includeMetadataChanges:!0,Nu:!0});return Xg(i,l)}(await bp(n),n.asyncQueue,e,t,s)),s.promise}class Np{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Qu(this,"async_queue_retry"),this.Wc=()=>{const t=Gs();t&&y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const e=Gs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Gs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new De;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!vn(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Ee("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=t,t}enqueueAfterDelay(e,t,s){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const i=dr.createAndSchedule(this,e,t,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&_()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class wr extends yr{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Np,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dc(this),this._firestoreClient.terminate()}}function Dp(n,e){const t=typeof n=="object"?n:Do(),s=typeof n=="string"?n:e||"(default)",i=wi(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Mc("firestore");r&&Ip(i,...r)}return i}function hc(n){return n._firestoreClient||dc(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function dc(n){var e;const t=n._freezeSettings(),s=function(i,r,o,a){return new sf(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new _p(n._authCredentials,n._appCheckCredentials,n._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ft(ee.fromBase64String(e))}catch(t){throw new I(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ft(ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new I(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=/^__.*__$/;class Lp{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Xe(e,this.data,this.fieldMask,t,this.fieldTransforms):new wn(e,this.data,t,this.fieldTransforms)}}function gc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class Er{constructor(e,t,s,i,r,o){this.settings=e,this.databaseId=t,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Er(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ns(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(gc(this.sa)&&Op.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Pp{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=s||Rs(e)}da(e,t,s,i=!1){return new Er({sa:e,methodName:t,fa:s,path:Y.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Mp(n){const e=n._freezeSettings(),t=Rs(n._databaseId);return new Pp(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xp(n,e,t,s,i,r={}){const o=n.da(r.merge||r.mergeFields?2:0,e,t,i);vc("Data must be an object, but it was:",o,s);const a=mc(s,o);let u,c;if(r.merge)u=new ue(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const l=[];for(const h of r.mergeFields){const g=Up(e,h,t);if(!o.contains(g))throw new I(f.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Vp(l,g)||l.push(g)}u=new ue(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new Lp(new ie(a),u,c)}function pc(n,e){if(yc(n=oe(n)))return vc("Unsupported field value:",e,n),mc(n,e);if(n instanceof fc)return function(t,s){if(!gc(s.sa))throw s.ha(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const o of t){let a=pc(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=oe(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Sf(s.yt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=V.fromDate(t);return{timestampValue:es(s.yt,i)}}if(t instanceof V){const i=new V(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:es(s.yt,i)}}if(t instanceof Ir)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ft)return{bytesValue:$u(s.yt,t._byteString)};if(t instanceof re){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ir(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ha(`Unsupported field value: ${mr(t)}`)}(n,e)}function mc(n,e){const t={};return fu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wt(n,(s,i)=>{const r=pc(i,e.ra(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function yc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof V||n instanceof Ir||n instanceof ft||n instanceof re||n instanceof fc)}function vc(n,e,t){if(!yc(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=mr(t);throw s==="an object"?e.ha(n+" a custom object"):e.ha(n+" "+s)}}function Up(n,e,t){if((e=oe(e))instanceof Tr)return e._internalPath;if(typeof e=="string")return wc(n,e);throw ns("Field path arguments must be of type string or ",n,!1,void 0,t)}const Fp=new RegExp("[~\\*/\\[\\]]");function wc(n,e,t){if(e.search(Fp)>=0)throw ns(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Tr(...e.split("."))._internalPath}catch{throw ns(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ns(n,e,t,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new I(f.INVALID_ARGUMENT,a+n+u)}function Vp(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ic("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qp extends Tc{data(){return super.data()}}function Ic(n,e){return typeof e=="string"?wc(n,e):e instanceof Tr?e._internalPath:e._delegate._internalPath}class $p{convertValue(e,t="none"){switch(We(e)){case 0:return null;case 1:return e.booleanValue;case 2:return x(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw _()}}convertObject(e,t){const s={};return wt(e.fields,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new Ir(x(e.latitude),x(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=pu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(zt(e));default:return null}}convertTimestamp(e){const t=Le(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=L.fromString(e);D(Hu(s));const i=new Ht(s.get(1),s.get(3)),r=new v(s.popFirst(5));return i.isEqual(t)||Ee(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ec extends Tc{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Kp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ic("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Kp extends Ec{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n){n=Yt(n,re);const e=Yt(n.firestore,wr);return Rp(hc(e),n._key).then(t=>zp(e,n,t))}class Gp extends $p{constructor(e){super(),this.firestore=e}convertBytes(e){return new ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,t)}}function sm(n,e,t){n=Yt(n,re);const s=Yt(n.firestore,wr),i=Bp(n.converter,e,t);return Hp(s,[xp(Mp(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,we.none())])}function Hp(n,e){return function(t,s){const i=new De;return t.asyncQueue.enqueueAndForget(async()=>up(await Cp(t),s,i)),i.promise}(hc(n),e)}function zp(n,e,t){const s=t.docs.get(e._key),i=new Gp(n);return new Ec(n,i,e._key,s,new jp(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){vt=t})(Zt),Hs(new zs("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),o=new wr(new Gd(t.getProvider("auth-internal")),new Qd(t.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ht(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),xt(eo,"3.8.3",n),xt(eo,"3.8.3","esm2017")})();const Wp={apiKey:"AIzaSyCrcmr86o1V4uhhMCOR-IYqFcJGjUDkEyo",authDomain:"ryh-miguel.firebaseapp.com",projectId:"ryh-miguel",storageBucket:"ryh-miguel.appspot.com",messagingSenderId:"427782801980",appId:"1:427782801980:web:5d2630887e69b2c29c1139",measurementId:"G-LZPWT5V3QY"},_c=Uc(Wp),im=qh(_c),rm=Dp(_c);export{tm as A,be as G,nm as O,sm as U,im as a,Zp as b,Jp as c,rm as d,Yp as e,em as s,Xp as u};
