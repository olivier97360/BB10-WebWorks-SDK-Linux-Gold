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
var ContactName = function (properties) {
    this.formatted = properties && properties.formatted ? properties.formatted : "";
    this.familyName = properties && properties.familyName ? properties.familyName : "";
    this.givenName = properties && properties.givenName ? properties.givenName : "";
    this.middleName = properties && properties.middleName ? properties.middleName : "";
    this.honorificPrefix = properties && properties.honorificPrefix ? properties.honorificPrefix : "";
    this.honorificSuffix = properties && properties.honorificSuffix ? properties.honorificSuffix : "";
    this.phoneticFamilyName = properties && properties.phoneticFamilyName ? properties.phoneticFamilyName : "";
    this.phoneticGivenName = properties && properties.phoneticGivenName ? properties.phoneticGivenName : "";
};

module.exports = ContactName;
