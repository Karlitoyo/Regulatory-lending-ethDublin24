# ReguLend
Our crypto lending platform aims to bridge the gap for individuals with Crypto assets who might not be able to secure traditional loans due to poor credit scores. By leveraging the value of their crypto assets, we provide a new pathway for these individuals to access necessary funds as stablecoins / CBDC tokens and overcoming the barriers imposed by traditional lending institutions.
## Team
- Karl Timmins
- Faran Khan
- Aws Al-Adhami
- Harsha
- Mustafa Kamal
- Luthiano Trarbach
## Description
Our DeFi platform is designed at its core to be simplistic and user friendly with the capability to allow borrowers and lenders to leverage their assets to create a decentralized platform releasing equity from assets held within the crypto eco-system with regulatory compliance such as KYC, AML and CFT. Currently individuals have a lengthy process to exit the market and in many instances do not wish to sell their positions for a loss; or for a perceived loss. Our DeFi platfrom will allow them to lock their crypto asset at present value for similar value in stablecoins / CBDC tokens and make regular payments to receive their assets back at the initial loan price plus interest. This creates a scenario whereby should the locked asset increase in value to a greater amount within the duration of the loan agreement, the borrower can realize the original value and take advantage of the increase in asset price once the loan + interest has been paid in full.
## Flow of Artefact
1. Lender deposits `stablecoins / CBDC tokens` into our platform and an `NFT` is generated as receipt.
2. Borrower deposits his/her `crypto asset` as collateral to gain `stablecoins / CBDC` tokens and an `NFT` is generated as receipt.
3. `Pool` of tokens and assets is created.
4. Regulatory compliance such as `KYC, AML and CFT` is being done using `smart contracts` and `multi-chain blockchain`.
5. Borrower is given the required `loan` in the form of stablecoins / CBDC tokens on `agreed terms`.
6. Lender gets his/her deposited tokens back with some `interest` after agreed terms.
## Features in Artefact
MetaMask wallet is used to confirm transactions and sign messgages.
1. We have utilized [EIP-20](https://eips.ethereum.org/EIPS/eip-20) as our fungible token standard. Our Stablecoins / CBDC tokens exist as ERC20 tokens.
2. We have utilized [EIP-721](https://eips.ethereum.org/EIPS/eip-721) as our non-fungible token standard. 
3. We have utilized [EIP-7377](https://eips.ethereum.org/EIPS/eip-7377) as our account abstraction standard.
3. We have utilized [EIP-1271](https://eips.ethereum.org/EIPS/eip-1271) as our signature validation standard.
## Tech Stack
The artefact is a decentralized app (dApp) built using:
- Hardhat (Ethereum development environment)
- OpenZeppelin (smart contracts)
- Ethers.js (web3 library)
- React.js (frontend library)
## User Stories
1. **Middle Income User**
> Pain Points

Difficulty meeting loan terms. Struggling with regular savings.
> Scenario

User has a crypto asset but requires a loan to make a payment for a holiday in the form of stablecoin / CBDC token. User’s asset has the ability to rise in value in the short-to-medium term but the existing method to trade that asset lacks regulatory compliance and includes high fees to withdraw funds. Making use of DeFi and CBDC service, the user can trade his/her asset for a stablecoin / CBDC token  at an agreed amount, terms, rate of interest with blockchain-based regulated KYC. During the term of the loan, the value of the asset held as collateral increases to double. The user repays the loan in full including the interest and the asset is released.

2. **Low Income User**
> Pain Points

Has arrears on his/her mortgage repayments. Cannot maintain the current level of debt.
> Scenario

Borrower has a crypto asset to a value of €1100 and uses it as collateral to get a loan of €1000 + 10% interest. The user agrees the term of 11 months @ €100 per month. The borrower makes five payments of €100. During this period, the value of the collateralized asset drops to €600 and the borrower decides not to continue with the repayment of the loan. The €600 asset and the €500 paid in installments are reverted back to the lender. The circulation of the money will be in the form of stablecoins / CBDC tokens.
## Architecture Diagram
![package drawio](https://github.com/Karlitoyo/Regulatory-lending-ethDublin24/assets/73027299/58846b0a-1d53-4e7a-a9f9-3cafa7c643c3)
## Use Case Diagram
![usecase drawio](https://github.com/Karlitoyo/Regulatory-lending-ethDublin24/assets/73027299/45473f22-b7b4-45b3-8765-0a570c7eb359)

