# Dominion
Multi component workflow that can interconnect APIs
# Purpose
Dominion is a Block-based workflow that can be configurated and work as a deployable stand-alone workflow
# Blocks
Blocks are basic software pieces that can perform these three step:
- Get a Data
- Elaborate a Data
- Send Data to other block

Each Block is independent and don't understand or know the reason why other Block should exist. Each Block exists to perform its own micro-activity.
Every Block can be connected to other passing data as a Json object
# Formulas
Formulas are special features that can elaborate the input value locally within the block.
(e.g) addPercentage is a formula that will add the configured percentage to the input value
Current coded formulas 
- min
- plus
- addPercentage
- concat

# Autofire
A block can be in a special status called Autofire, that means that once the block is configurate it will elaborate the input and pass the result value to the next block(s) automatically
