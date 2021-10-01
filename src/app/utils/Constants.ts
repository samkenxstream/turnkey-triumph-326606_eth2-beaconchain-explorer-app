export const SETTING_NOTIFY = "setting_notify"
export const SETTING_NOTIFY_SLASHED = "setting_notify_slashed"
export const SETTING_NOTIFY_DECREASED = "setting_notify_decreased"
export const SETTING_NOTIFY_PROPOSAL_SUBMITTED = "setting_notify_proposalsubmitted"
export const SETTING_NOTIFY_PROPOSAL_MISSED = "setting_notify_proposalsmissed"
export const SETTING_NOTIFY_ATTESTATION_MISSED = "setting_notify_attestationsmissed"
export const SETTING_NOTIFY_CLIENTUPDATE = "setting_notify_clientupdate"
export const SETTING_NOTIFY_MACHINE_OFFLINE = "setting_notify_machineoffline"
export const SETTING_NOTIFY_HDD_WARN = "setting_notify_hddwarn"
export const SETTING_NOTIFY_CPU_WARN = "setting_notify_cpuwarn"
export const SETTING_NOTIFY_MEMORY_WARN = "setting_notify_memorywarn"

// this should be SETTING_
export const ETH1_CLIENT_SAVED = "setting_client_eth1"
export const ETH2_CLIENT_SAVED = "setting_client_eth2"

export const CPU_THRESHOLD = "cpu_usage_threshold"
export const HDD_THRESHOLD = "hdd_usage_threshold"
export const RAM_THRESHOLD = "ram_usage_threshold"

export const DEBUG_SETTING_OVERRIDE_PACKAGE = "debug_setting_override_package"

// Events
export const EVENT_VALIDATOR_BALANCE_DECREASED = "validator_balance_decreased"
export const EVENT_VALIDATOR_PROPOSAL_MISSED = "validator_proposal_missed"
export const EVENT_VALIDATOR_PROPOSAL_SUBMITTED = "validator_proposal_submitted"
export const EVENT_VALIDATOR_ATTESTATION_MISSED = "validator_attestation_missed"
export const EVENT_VALIDATOR_GOT_SLASHED = "validator_got_slashed"
export const EVENT_VALIDATOR_DID_SLASH = "validator_did_slash"
export const EVENT_VALIDATOR_STATE_CHANGED = "validator_state_changed"
export const EVENT_VALIDATOR_RECEIVED_DEPOSIT = "validator_received_deposit"
export const EVENT_NETWORK_SLASHING = "network_slashing"
export const EVENT_NETWORK_VALIDATOR_ACTIVATION_QUEUE_FULL = "network_validator_activation_queue_full"
export const EVENT_NETWORK_VALIDATOR_ACTIVATION_QUEUE_NOT_FULL = "network_validator_activation_queue_not_full"
export const EVENT_NETWORK_VALIDATOR_EXIT_QUEUE_FULL = "network_validator_exit_queue_full"
export const EVENT_NETWORK_VALIDATOR_EXIT_QUEUE_NOT_FULL = "network_validator_exit_queue_not_full"
export const EVENT_NETWORK_LIVENESS_INCREASED = "network_liveness_increased"
export const EVENT_ETH_CLIENT_UPDATE = "eth_client_update"
export const EVENT_MONITORING_MACHINE_OFFLINE = "monitoring_machine_offline"
export const EVENT_MONITORING_HDD_ALMOSTFULL = "monitoring_hdd_almostfull"
export const EVENT_MONITORING_CPU_LOAD = "monitoring_cpu_load"
export const EVENT_MONITORING_MEMORY_USAGE = "monitoring_memory_usage"
export const EVENT_MONITORING_FALLBACK_ETH2INUSE = "monitoring_fallback_eth2inuse"
export const EVENT_MONITORING_FALLBACK_ETH1INUSE = "monitoring_fallback_eth1inuse"
export const EVENT_USER_TAX_REPORT = "user_tax_report"