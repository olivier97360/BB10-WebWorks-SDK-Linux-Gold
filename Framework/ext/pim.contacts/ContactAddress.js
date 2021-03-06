/*
 * Copyright 2012 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ContactAddress = function (properties) {
    this.type = properties && properties.type ? properties.type : "";
    this.streetAddress = properties && properties.streetAddress ? properties.streetAddress : "";
    this.streetOther = properties && properties.streetOther ? properties.streetOther : "";
    this.locality = properties && properties.locality ? properties.locality : "";
    this.region = properties && properties.region ? properties.region : "";
    this.postalCode = properties && properties.postalCode ? properties.postalCode : "";
    this.country = properties && properties.country ? properties.country : "";
};

Object.defineProperty(ContactAddress, "HOME", {"value": "home"});
Object.defineProperty(ContactAddress, "WORK", {"value": "work"});
Object.defineProperty(ContactAddress, "OTHER", {"value": "other"});

module.exports = ContactAddress;

