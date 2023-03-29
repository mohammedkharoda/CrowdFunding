// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

    contract CrowdFunding {
        struct Campaing {
            address owner;
            string title;
            string description;
            uint256 target;
            uint256 deadline;
            uint256 amountCollected;
            string image;
            address[] donators;
            uint256[] donations;
        }

        mapping(uint256 => Campaing ) public campaigns ;
        uint256 public numberOfCampaigns = 0;

        function createCampaign(address _owner , string memory _title , string memory _description, uint256 _target, uint256 _deadline, string memory _image) public return (uint256) {
            Campagin storage campagin = campagin[numberOfCampagin];
            require(campagin.deadline < block.timestamp, 'The DeadLine must be a date in future')

            campagin.owner = _owner;
            campagin.description = _description;
            campagin.title = _title
            campagin.target = _target;
            campagin.deadline = _deadline;
            campagin.amountCollected = 0;
            campagin.image = _image;

            numberOfCampaigns++;

            return numberOfCampaigns - 1;
}

        function donateCampaign() {}

        function getDonators() {}

        function getCampaigns() {}
    }