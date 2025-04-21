"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const maker_base_1 = __importDefault(require("@electron-forge/maker-base"));
const app_builder_lib_1 = require("app-builder-lib");
const path_1 = require("path");
class PortableMaker extends maker_base_1.default {
    constructor() {
        super(...arguments);
        this.name = "portable";
        this.defaultPlatforms = ["win32"];
    }
    isSupportedOnCurrentPlatform() {
        return true;
    }
    async make(options) {
        var _a;
        if (options.targetPlatform !== "win32") {
            throw new Error("Portable apps can only target the 'win32' platform");
        }
        const appDir = options.dir;
        return (0, app_builder_lib_1.build)({
            prepackaged: appDir,
            win: [`portable:${options.targetArch}`],
            config: Object.assign(Object.assign({}, this.config), { directories: Object.assign({ output: (0, path_1.resolve)(appDir, "..", "make") }, (_a = this.config) === null || _a === void 0 ? void 0 : _a.directories) }),
        });
    }
}
exports.default = PortableMaker;
