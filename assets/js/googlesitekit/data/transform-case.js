/**
 * Data store utilities for transforming names to a certain case.
 *
 * Site Kit by Google, Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Transforms a camel-case name into its pascal-case name.
 *
 * @since 1.10.0
 * @private
 *
 * @param {string} name Camel-case name to transform.
 * @return {string} Pascal-case name.
 */
export const camelCaseToPascalCase = ( name ) => {
	return name.charAt( 0 ).toUpperCase() + name.slice( 1 );
};

/**
 * Transforms a camel-case name into its constant-case name.
 *
 * @since 1.10.0
 * @private
 *
 * @param {string} name Camel-case name to transform.
 * @return {string} constant-case name.
 */
export const camelCaseToConstantCase = ( name ) => {
	return name.replace( /([a-z0-9]{1})([A-Z]{1})/g, '$1_$2' ).toUpperCase();
};
