import type { Config } from "@jest/types";


const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    coverageDirectory: 'coverage',
};

export default config;