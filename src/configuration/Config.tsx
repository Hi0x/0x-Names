import { ThemingProps } from '@chakra-ui/react'
import { polygon} from '@wagmi/chains'

export const SITE_NAME = '0X Names'
export const SITE_DESCRIPTION = 'Hi0x © 2024'
export const SITE_URL = 'https://0xns.pro'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = { initialColorMode: THEME_INITIAL_COLOR }

export const SOCIAL_MEDIUM = '' //Leave it blank if no values
export const SOCIAL_LINKEDIN = 'hi0x'
export const SOCIAL_TWITTER = 'hi0xchat'
export const SOCIAL_GITHUB = '0xns'
export const SOCIAL_DISCORD = ''

export const NETWORKS = [polygon]; //polygon, filecoin, polygonMumbai
export const NETWORK_ERROR = "Connect your wallet" //Change network name as required

export const DOMAIN_TLD = '0x' //primary domain name without dot (.)
export const DOMAIN_IMAGE_URL = 'https://ipfs.io/ipfs/QmRSHF1SNVYRyhYqEibP19CEU4R4r8PCfzkeJb7F17B5VA' //Image path starts with ipfs:// or https://
export const DOMAIN_NETWORK_CHAIN = 137 //137 for polygon, 314 for filecoin, 80001 form mumbai
export const DOMAIN_DESCRIPTION = 'Web3 Domain Name'
export const DOMAIN_TYPE = "W3D" //W3D for polygon, FVM for Filecoin net
export const DOMAIN_TITLE = "" //Title above the search input field. 
export const DOMAIN_PLACEHOLDER = "Search for a name ... Mint price 50 H" //Placeholder for search input field 

export const ADMIN_WALLET = "0x6ec0Ce3333A7A2a37e38c656B46752F2a9fC8e19" //ETH wallet address 

export const NOTICE_TITLE = ""
export const NOTICE_NON_MEMBER = ""

export const DOMAIN_BANNER = "https://i.imgur.com/DiOSuUn.png" //290x80 size

//Configuration should match with the chain specified at NETWORKS
//Leave TOKEN_CONTRACT_ADDRESS to blank for default ETH payment
//export const TOKEN_CONTRACT_ADDRESS="0x76174204db0bC7c3C817ce5b16C6Ef3900434B02" //ERC20 EVM Token contract wallet address
export const TOKEN_SYMBOL= "H" //Token symbol name eg. DOGE
export const TOKEN_PRICE = "50" //Token price to mint
export const TOKEN_DECIMAL = "18" //Decimal places of TOKEN_CONTRACT_ADDRESS or TOKEN_SYMBOL
export const TOKEN_CONTRACT_ADDRESS="0x76174204db0bC7c3C817ce5b16C6Ef3900434B02"
