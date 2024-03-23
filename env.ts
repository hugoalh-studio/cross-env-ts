import process from "node:process";
/**
 * Delete an environment variable.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @returns {void}
 */
export function deleteEnv(key: string): void {
	if (typeof Deno !== "undefined") {
		return Deno.env.delete(key);
	}
	process.env[key] = undefined;
}
export {
	deleteEnv as deleteEnvironmentVariable
};
/**
 * Get a snapshot of the environment variables at invocation as a simple object of keys and values.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @returns {{ [key: string]: string; }} A snapshot of the environment variables.
 */
export function getAllEnv(): { [key: string]: string; } {
	if (typeof Deno !== "undefined") {
		return Deno.env.toObject();
	}
	const result: { [key: string]: string; } = {};
	for (const [key, value] of Object.entries(process.env)) {
		if (typeof value !== "undefined") {
			result[key] = value;
		}
	}
	return result;
}
export {
	getAllEnv as getAllEnvironmentVariable
};
/**
 * Get the value of an environment variable.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @returns {string | undefined} Value of the environment variable.
 */
export function getEnv(key: string): string | undefined {
	if (typeof Deno !== "undefined") {
		return Deno.env.get(key);
	}
	return process.env[key];
}
export {
	getEnv as getEnvironmentVariable
};
/**
 * Check whether an environment variable is present.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @returns {boolean} Determine result.
 */
export function hasEnv(key: string): boolean {
	if (typeof Deno !== "undefined") {
		return Deno.env.has(key);
	}
	return (typeof process.env[key] !== "undefined");
}
export {
	hasEnv as hasEnvironmentVariable
};
/**
 * Set an environment variable.
 * 
 * > **🛡️ Require Permission**
 * >
 * > - Environment Variable (`allow-env`)
 * @param {string} key Key of the environment variable.
 * @param {string} value Value of the environment variable.
 * @returns {void}
 */
export function setEnv(key: string, value: string): void {
	if (typeof Deno !== "undefined") {
		return Deno.env.set(key, value);
	}
	process.env[key] = value;
}
export {
	setEnv as setEnvironmentVariable
};
