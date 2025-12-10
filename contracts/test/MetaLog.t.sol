// SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.4;

import "forge-std/Test.sol";
import { MetaLog } from "../src/MetaLog.sol";

contract MetaLogTest is Test {
    MetaLog internal metaLog;

    function setUp() public {
        metaLog = new MetaLog();
    }

    function testDeployment() public {
        // Simple sanity check to ensure contract deploys
        assert(address(metaLog) != address(0));
    }
}
