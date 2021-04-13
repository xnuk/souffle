// Stealing from Cactbot. Thanks, Cactbot!
// https://github.com/quisquous/cactbot/blob/main/plugin/CactbotEventSource/FFXIVProcess.cs


export const None = 0
export const GLA = 1
export const PGL = 2
export const MRD = 3
export const LNC = 4
export const ARC = 5
export const CNJ = 6
export const THM = 7
export const CRP = 8
export const BSM = 9
export const ARM = 10
export const GSM = 11
export const LTW = 12
export const WVR = 13
export const ALC = 14
export const CUL = 15
export const MIN = 16
export const BTN = 17
export const FSH = 18
export const PLD = 19
export const MNK = 20
export const WAR = 21
export const DRG = 22
export const BRD = 23
export const WHM = 24
export const BLM = 25
export const ACN = 26
export const SMN = 27
export const SCH = 28
export const ROG = 29
export const NIN = 30
export const MCH = 31
export const DRK = 32
export const AST = 33
export const SAM = 34
export const RDM = 35
export const BLU = 36
export const GNB = 37
export const DNC = 38

const workers = [
	FSH, MIN, BTN,
	CRP, BSM, ARM, GSM, LTW, WVR, ALC, CUL,
].sort((a, b) => a - b)

export const isWorker = (job: number) => workers.includes(job)
