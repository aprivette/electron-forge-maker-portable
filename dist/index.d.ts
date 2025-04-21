import MakerBase, { MakerOptions } from "@electron-forge/maker-base";
import { ForgePlatform } from "@electron-forge/shared-types";
import { Configuration } from "app-builder-lib";
export default class PortableMaker extends MakerBase<Configuration> {
    name: string;
    defaultPlatforms: ForgePlatform[];
    isSupportedOnCurrentPlatform(): boolean;
    make(options: MakerOptions): Promise<string[]>;
}
