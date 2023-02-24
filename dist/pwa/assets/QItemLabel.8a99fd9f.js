import{j as U,c as Te,v as ke,e as ye,_ as Ee,C as Ae,r as ee,w as Oe,S as Ue,F as Ie,y as xe}from"./index.esm2017.22ab8bcd.js";import{c as Ne,a as $,h as Pe,d as Ce}from"./index.15f4c268.js";/**
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
 */const ae="firebasestorage.googleapis.com",ue="storageBucket",De=2*60*1e3,ve=10*60*1e3;/**
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
 */class h extends Ie{constructor(t,n,s=0){super(H(t),`Firebase Storage: ${n} (${H(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return H(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var c;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(c||(c={}));function H(e){return"storage/"+e}function W(){const e="An unknown error occurred, please check the error payload for server response.";return new h(c.UNKNOWN,e)}function Se(e){return new h(c.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Le(e){return new h(c.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Be(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(c.UNAUTHENTICATED,e)}function Me(){return new h(c.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Fe(e){return new h(c.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function $e(){return new h(c.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function He(){return new h(c.CANCELED,"User canceled the upload/download.")}function qe(e){return new h(c.INVALID_URL,"Invalid URL '"+e+"'.")}function je(e){return new h(c.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ve(){return new h(c.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ue+"' property when initializing the app?")}function We(){return new h(c.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ze(){return new h(c.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ke(e){return new h(c.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function j(e){return new h(c.INVALID_ARGUMENT,e)}function le(){return new h(c.APP_DELETED,"The Firebase app was deleted.")}function Xe(e){return new h(c.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function C(e,t){return new h(c.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function P(e){throw new h(c.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class p{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=p.makeFromUrl(t,n)}catch{return new p(t,"")}if(s.path==="")return s;throw je(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),u={bucket:1,path:3};function l(m){m.path_=decodeURIComponent(m.path)}const d="v[A-Za-z0-9_]+",R=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",b=new RegExp(`^https?://${R}/${d}/b/${r}/o${g}`,"i"),w={bucket:1,path:3},I=n===ae?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",x=new RegExp(`^https?://${I}/${r}/${_}`,"i"),T=[{regex:a,indices:u,postModify:o},{regex:b,indices:w,postModify:l},{regex:x,indices:{bucket:1,path:2},postModify:l}];for(let m=0;m<T.length;m++){const S=T[m],M=S.regex.exec(t);if(M){const we=M[S.indices.bucket];let F=M[S.indices.path];F||(F=""),s=new p(we,F),S.postModify(s);break}}if(s==null)throw qe(t);return s}}class Ge{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Ye(e,t,n){let s=1,r=null,o=null,i=!1,a=0;function u(){return a===2}let l=!1;function d(..._){l||(l=!0,t.apply(null,_))}function R(_){r=setTimeout(()=>{r=null,e(b,u())},_)}function g(){o&&clearTimeout(o)}function b(_,...x){if(l){g();return}if(_){g(),d.call(null,_,...x);return}if(u()||i){g(),d.call(null,_,...x);return}s<64&&(s*=2);let T;a===1?(a=2,T=0):T=(s+Math.random())*1e3,R(T)}let w=!1;function I(_){w||(w=!0,g(),!l&&(r!==null?(_||(a=2),clearTimeout(r),R(0)):_||(a=1)))}return R(0),o=setTimeout(()=>{i=!0,I(!0)},n),I}function Ze(e){e(!1)}/**
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
 */function Qe(e){return e!==void 0}function Je(e){return typeof e=="object"&&!Array.isArray(e)}function z(e){return typeof e=="string"||e instanceof String}function te(e){return K()&&e instanceof Blob}function K(){return typeof Blob!="undefined"&&!xe()}function V(e,t,n,s){if(s<t)throw j(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw j(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function N(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function ce(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var A;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(A||(A={}));/**
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
 */function et(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||r||o}/**
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
 */class tt{constructor(t,n,s,r,o,i,a,u,l,d,R,g=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=d,this.connectionFactory_=R,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,w)=>{this.resolve_=b,this.reject_=w,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new L(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===A.NO_ERROR,u=o.getStatus();if(!a||et(u,this.additionalRetryCodes_)&&this.retry){const d=o.getErrorCode()===A.ABORT;s(!1,new L(!1,null,d));return}const l=this.successCodes_.indexOf(u)!==-1;s(!0,new L(l,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Qe(u)?o(u):o()}catch(u){i(u)}else if(a!==null){const u=W();u.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,u)):i(u)}else if(r.canceled){const u=this.appDelete_?le():He();i(u)}else{const u=$e();i(u)}};this.canceled_?n(!1,new L(!1,null,!0)):this.backoffId_=Ye(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Ze(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class L{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function nt(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function st(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function rt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ot(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function it(e,t,n,s,r,o,i=!0){const a=ce(e.urlParams),u=e.url+a,l=Object.assign({},e.headers);return rt(l,t),nt(l,n),st(l,o),ot(l,s),new tt(u,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,i)}/**
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
 */function at(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function ut(...e){const t=at();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(K())return new Blob(e);throw new h(c.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function lt(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function ct(e){if(typeof atob=="undefined")throw Ke("base-64");return atob(e)}/**
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
 */const k={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class q{constructor(t,n){this.data=t,this.contentType=n||null}}function ht(e,t){switch(e){case k.RAW:return new q(he(t));case k.BASE64:case k.BASE64URL:return new q(de(e,t));case k.DATA_URL:return new q(ft(t),pt(t))}throw W()}function he(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const o=s,i=e.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function dt(e){let t;try{t=decodeURIComponent(e)}catch{throw C(k.DATA_URL,"Malformed data URL.")}return he(t)}function de(e,t){switch(e){case k.BASE64:{const r=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(r||o)throw C(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case k.BASE64URL:{const r=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(r||o)throw C(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ct(t)}catch(r){throw r.message.includes("polyfill")?r:C(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class fe{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw C(k.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=_t(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function ft(e){const t=new fe(e);return t.base64?de(k.BASE64,t.rest):dt(t.rest)}function pt(e){return new fe(e).contentType}function _t(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class y{constructor(t,n){let s=0,r="";te(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(te(this.data_)){const s=this.data_,r=lt(s,t,n);return r===null?null:new y(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new y(s,!0)}}static getBlob(...t){if(K()){const n=t.map(s=>s instanceof y?s.data_:s);return new y(ut.apply(null,n))}else{const n=t.map(i=>z(i)?ht(k.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)r[o++]=i[a]}),new y(r,!0)}}uploadData(){return this.data_}}/**
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
 */function X(e){let t;try{t=JSON.parse(e)}catch{return null}return Je(t)?t:null}/**
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
 */function mt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function gt(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function pe(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Rt(e,t){return t}class f{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||Rt}}let B=null;function bt(e){return!z(e)||e.length<2?e:pe(e)}function G(){if(B)return B;const e=[];e.push(new f("bucket")),e.push(new f("generation")),e.push(new f("metageneration")),e.push(new f("name","fullPath",!0));function t(o,i){return bt(i)}const n=new f("name");n.xform=t,e.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new f("size");return r.xform=s,e.push(r),e.push(new f("timeCreated")),e.push(new f("updated")),e.push(new f("md5Hash",null,!0)),e.push(new f("cacheControl",null,!0)),e.push(new f("contentDisposition",null,!0)),e.push(new f("contentEncoding",null,!0)),e.push(new f("contentLanguage",null,!0)),e.push(new f("contentType",null,!0)),e.push(new f("metadata","customMetadata",!0)),B=e,B}function wt(e,t){function n(){const s=e.bucket,r=e.fullPath,o=new p(s,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function Tt(e,t,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,t[i.server])}return wt(s,e),s}function _e(e,t,n){const s=X(t);return s===null?null:Tt(e,s,n)}function kt(e,t,n,s){const r=X(t);if(r===null||!z(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(l=>{const d=e.bucket,R=e.fullPath,g="/b/"+i(d)+"/o/"+i(R),b=N(g,n,s),w=ce({alt:"media",token:l});return b+w})[0]}function yt(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const o=t[r];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}/**
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
 */const ne="prefixes",se="items";function Et(e,t,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ne])for(const r of n[ne]){const o=r.replace(/\/$/,""),i=e._makeStorageReference(new p(t,o));s.prefixes.push(i)}if(n[se])for(const r of n[se]){const o=e._makeStorageReference(new p(t,r.name));s.items.push(o)}return s}function At(e,t,n){const s=X(n);return s===null?null:Et(e,t,s)}class D{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Y(e){if(!e)throw W()}function me(e,t){function n(s,r){const o=_e(e,r,t);return Y(o!==null),o}return n}function Ot(e,t){function n(s,r){const o=At(e,t,r);return Y(o!==null),o}return n}function Ut(e,t){function n(s,r){const o=_e(e,r,t);return Y(o!==null),kt(o,r,e.host,e._protocol)}return n}function Z(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Me():r=Be():n.getStatus()===402?r=Le(e.bucket):n.getStatus()===403?r=Fe(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function Q(e){const t=Z(e);function n(s,r){let o=t(s,r);return s.getStatus()===404&&(o=Se(e.path)),o.serverResponse=r.serverResponse,o}return n}function It(e,t,n){const s=t.fullServerUrl(),r=N(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new D(r,o,me(e,n),i);return a.errorHandler=Q(t),a}function xt(e,t,n,s,r){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n&&n.length>0&&(o.delimiter=n),s&&(o.pageToken=s),r&&(o.maxResults=r);const i=t.bucketOnlyServerUrl(),a=N(i,e.host,e._protocol),u="GET",l=e.maxOperationRetryTime,d=new D(a,u,Ot(e,t.bucket),l);return d.urlParams=o,d.errorHandler=Z(t),d}function Nt(e,t,n){const s=t.fullServerUrl(),r=N(s,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new D(r,o,Ut(e,n),i);return a.errorHandler=Q(t),a}function Pt(e,t){const n=t.fullServerUrl(),s=N(n,e.host,e._protocol),r="DELETE",o=e.maxOperationRetryTime;function i(u,l){}const a=new D(s,r,i,o);return a.successCodes=[200,204],a.errorHandler=Q(t),a}function Ct(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function Dt(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=Ct(null,t)),s}function vt(e,t,n,s,r){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let m=0;m<2;m++)T=T+Math.random().toString().slice(2);return T}const u=a();i["Content-Type"]="multipart/related; boundary="+u;const l=Dt(t,s,r),d=yt(l,n),R="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,g=`\r
--`+u+"--",b=y.getBlob(R,s,g);if(b===null)throw We();const w={name:l.fullPath},I=N(o,e.host,e._protocol),_="POST",x=e.maxUploadRetryTime,E=new D(I,_,me(e,n),x);return E.urlParams=w,E.headers=i,E.body=b.uploadData(),E.errorHandler=Z(t),E}class St{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=A.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=A.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=A.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Lt extends St{initXhr(){this.xhr_.responseType="text"}}function v(){return new Lt}/**
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
 */class O{constructor(t,n){this._service=t,n instanceof p?this._location=n:this._location=p.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new O(t,n)}get root(){const t=new p(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const t=mt(this._location.path);if(t===null)return null;const n=new p(this._location.bucket,t);return new O(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Xe(t)}}function Bt(e,t,n){e._throwIfRoot("uploadBytes");const s=vt(e.storage,e._location,G(),new y(t,!0),n);return e.storage.makeRequestWithTokens(s,v).then(r=>({metadata:r,ref:e}))}function Mt(e){const t={prefixes:[],items:[]};return ge(e,t).then(()=>t)}async function ge(e,t,n){const r=await Ft(e,{pageToken:n});t.prefixes.push(...r.prefixes),t.items.push(...r.items),r.nextPageToken!=null&&await ge(e,t,r.nextPageToken)}function Ft(e,t){t!=null&&typeof t.maxResults=="number"&&V("options.maxResults",1,1e3,t.maxResults);const n=t||{},s=xt(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(s,v)}function $t(e){e._throwIfRoot("getMetadata");const t=It(e.storage,e._location,G());return e.storage.makeRequestWithTokens(t,v)}function Ht(e){e._throwIfRoot("getDownloadURL");const t=Nt(e.storage,e._location,G());return e.storage.makeRequestWithTokens(t,v).then(n=>{if(n===null)throw ze();return n})}function qt(e){e._throwIfRoot("deleteObject");const t=Pt(e.storage,e._location);return e.storage.makeRequestWithTokens(t,v)}function jt(e,t){const n=gt(e._location.path,t),s=new p(e._location.bucket,n);return new O(e.storage,s)}/**
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
 */function Vt(e){return/^[A-Za-z]+:\/\//.test(e)}function Wt(e,t){return new O(e,t)}function Re(e,t){if(e instanceof J){const n=e;if(n._bucket==null)throw Ve();const s=new O(n,n._bucket);return t!=null?Re(s,t):s}else return t!==void 0?jt(e,t):e}function zt(e,t){if(t&&Vt(t)){if(e instanceof J)return Wt(e,t);throw j("To use ref(service, url), the first argument must be a Storage instance.")}else return Re(e,t)}function re(e,t){const n=t==null?void 0:t[ue];return n==null?null:p.makeFromBucketSpec(n,e)}function Kt(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:Oe(r,e.app.options.projectId))}class J{constructor(t,n,s,r,o){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ae,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=De,this._maxUploadRetryTime=ve,this._requests=new Set,r!=null?this._bucket=p.makeFromBucketSpec(r,this._host):this._bucket=re(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=p.makeFromBucketSpec(this._url,t):this._bucket=re(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){V("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){V("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new O(this,t)}_makeRequest(t,n,s,r,o=!0){if(this._deleted)return new Ge(le());{const i=it(t,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const oe="@firebase/storage",ie="0.11.1";/**
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
 */const be="storage";function Jt(e,t,n){return e=U(e),Bt(e,t,n)}function en(e){return e=U(e),$t(e)}function tn(e){return e=U(e),Mt(e)}function nn(e){return e=U(e),Ht(e)}function sn(e){return e=U(e),qt(e)}function rn(e,t){return e=U(e),zt(e,t)}function on(e=ye(),t){e=U(e);const s=Te(e,be).getImmediate({identifier:t}),r=ke("storage");return r&&Xt(s,...r),s}function Xt(e,t,n,s={}){Kt(e,t,n,s)}function Gt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new J(n,s,r,t,Ue)}function Yt(){Ee(new Ae(be,Gt,"PUBLIC").setMultipleInstances(!0)),ee(oe,ie,""),ee(oe,ie,"esm2017")}Yt();var an=Ne({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=$(()=>parseInt(e.lines,10)),s=$(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),r=$(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>Pe("div",{style:r.value,class:s.value},Ce(t.default))}});export{an as Q,nn as a,en as b,sn as d,on as g,tn as l,rn as r,Jt as u};
