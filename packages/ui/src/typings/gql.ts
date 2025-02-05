export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type CreateJobInput = {
  queue: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  options?: Maybe<Scalars['JSON']>;
};


export type Job = {
  id: Scalars['ID'];
  name: Scalars['String'];
  data?: Maybe<Scalars['String']>;
  status: JobStatus;
  returnValue?: Maybe<Scalars['String']>;
  progress: Scalars['String'];
  attemptsMade: Scalars['Int'];
  failedReason?: Maybe<Scalars['String']>;
  stacktrace: Array<Maybe<Scalars['String']>>;
  logs?: Maybe<JobLogs>;
  delay?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  finishedOn?: Maybe<Scalars['Float']>;
  processedOn?: Maybe<Scalars['Float']>;
  processingTime?: Maybe<Scalars['Float']>;
  opts: Scalars['String'];
};

export type JobLogs = {
  count: Scalars['Int'];
  logs: Array<Maybe<Scalars['String']>>;
};

export enum JobStatus {
  Completed = 'completed',
  Waiting = 'waiting',
  Active = 'active',
  Delayed = 'delayed',
  Failed = 'failed',
  Paused = 'paused',
  Stuck = 'stuck',
  Unknown = 'unknown'
}

export enum JobStatusClean {
  Completed = 'completed',
  Wait = 'wait',
  Active = 'active',
  Delayed = 'delayed',
  Failed = 'failed',
  Paused = 'paused'
}

export type Mutation = {
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuepause */
  pauseQueue?: Maybe<Queue>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueresume */
  resumeQueue?: Maybe<Queue>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueclose */
  closeQueue?: Maybe<Queue>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueclean */
  cleanQueue: Array<Maybe<Scalars['ID']>>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueempty */
  emptyQueue?: Maybe<Queue>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobremove */
  removeJob?: Maybe<Job>;
  /** calls https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobremove on every passed job */
  removeJobs: Array<Maybe<Job>>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobmovetocompleted */
  moveJobToCompleted?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobmovetofailed */
  moveJobToFailed?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobdiscard */
  discardJob?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobpromote */
  promoteJob?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobupdate */
  updateJobData?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobretry */
  retryJob?: Maybe<Job>;
  /** calls https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#jobretry on every passed job */
  retryJobs: Array<Maybe<Job>>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#joblog */
  log?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueadd */
  createJob?: Maybe<Job>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queueremovejobs */
  removeJobsByPattern?: Maybe<Scalars['Boolean']>;
  clearMetrics?: Maybe<Scalars['Boolean']>;
  clearAllMetrics?: Maybe<Scalars['Boolean']>;
};


export type MutationPauseQueueArgs = {
  queue: Scalars['ID'];
};


export type MutationResumeQueueArgs = {
  queue: Scalars['ID'];
};


export type MutationCloseQueueArgs = {
  queue: Scalars['ID'];
};


export type MutationCleanQueueArgs = {
  queue: Scalars['ID'];
  grace?: Maybe<Scalars['Int']>;
  status: JobStatusClean;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationEmptyQueueArgs = {
  queue: Scalars['ID'];
};


export type MutationRemoveJobArgs = {
  queue: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationRemoveJobsArgs = {
  queue: Scalars['ID'];
  jobs: Array<Scalars['ID']>;
};


export type MutationMoveJobToCompletedArgs = {
  queue: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationMoveJobToFailedArgs = {
  queue: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationDiscardJobArgs = {
  queue: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationPromoteJobArgs = {
  queue: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationUpdateJobDataArgs = {
  queue: Scalars['ID'];
  id: Scalars['ID'];
  data?: Maybe<Scalars['JSON']>;
};


export type MutationRetryJobArgs = {
  queue: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationRetryJobsArgs = {
  queue: Scalars['ID'];
  jobs: Array<Scalars['ID']>;
};


export type MutationLogArgs = {
  queue: Scalars['ID'];
  id: Scalars['ID'];
  row: Scalars['String'];
};


export type MutationCreateJobArgs = {
  input: CreateJobInput;
};


export type MutationRemoveJobsByPatternArgs = {
  queue: Scalars['ID'];
  pattern: Scalars['String'];
};


export type MutationClearMetricsArgs = {
  queue: Scalars['ID'];
};

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Query = {
  queues?: Maybe<Array<Queue>>;
  queue?: Maybe<Queue>;
  metrics?: Maybe<Array<QueueMetrics>>;
  jobs: Array<Job>;
  job?: Maybe<Job>;
  redisInfo?: Maybe<RedisInfo>;
};


export type QueryQueueArgs = {
  id: Scalars['ID'];
};


export type QueryMetricsArgs = {
  queue: Scalars['ID'];
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
};


export type QueryJobsArgs = {
  queue: Scalars['ID'];
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  status?: Maybe<JobStatus>;
  order?: Maybe<OrderEnum>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dataSearch?: Maybe<Scalars['String']>;
};


export type QueryJobArgs = {
  queue: Scalars['ID'];
  id: Scalars['ID'];
};

export type Queue = {
  id: Scalars['String'];
  provider: QueueProvider;
  name: Scalars['String'];
  readonly?: Maybe<Scalars['Boolean']>;
  keyPrefix?: Maybe<Scalars['String']>;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuecount */
  count: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetjobcounts */
  jobsCounts: QueueJobsCounts;
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetcompletedcount */
  completedCount: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetfailedcount */
  failedCount: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetdelayedcount */
  delayedCount: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetactivecount */
  activeCount: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetwaitingcount */
  waitingCount: Scalars['Int'];
  /** https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queuegetpausedcount */
  pausedCount: Scalars['Int'];
  jobs: Array<Maybe<Job>>;
  isPaused: Scalars['Boolean'];
  metrics?: Maybe<Array<QueueMetrics>>;
};

export type QueueJobsCounts = {
  waiting: Scalars['Int'];
  active: Scalars['Int'];
  completed: Scalars['Int'];
  failed: Scalars['Int'];
  delayed: Scalars['Int'];
  paused: Scalars['Int'];
};

export type QueueMetrics = {
  timestamp: Scalars['Float'];
  counts: QueueJobsCounts;
  processingTime?: Maybe<Scalars['Float']>;
  processingTimeMin?: Maybe<Scalars['Float']>;
  processingTimeMax?: Maybe<Scalars['Float']>;
};

export enum QueueProvider {
  Bull = 'bull',
  Bullmq = 'bullmq'
}

export type RedisInfo = {
  redis_version?: Maybe<Scalars['String']>;
  used_memory?: Maybe<Scalars['String']>;
  used_memory_human?: Maybe<Scalars['String']>;
  used_memory_peak?: Maybe<Scalars['String']>;
  used_memory_peak_human?: Maybe<Scalars['String']>;
  used_memory_peak_perc?: Maybe<Scalars['String']>;
  used_memory_overhead?: Maybe<Scalars['String']>;
  used_memory_startup?: Maybe<Scalars['String']>;
  total_system_memory?: Maybe<Scalars['String']>;
  total_system_memory_human?: Maybe<Scalars['String']>;
  maxmemory?: Maybe<Scalars['String']>;
  maxmemory_human?: Maybe<Scalars['String']>;
  mem_fragmentation_ratio?: Maybe<Scalars['String']>;
  mem_fragmentation_bytes?: Maybe<Scalars['String']>;
  connected_clients?: Maybe<Scalars['String']>;
  blocked_clients?: Maybe<Scalars['String']>;
  redis_mode?: Maybe<Scalars['String']>;
  os?: Maybe<Scalars['String']>;
  arch_bits?: Maybe<Scalars['String']>;
  uptime_in_seconds?: Maybe<Scalars['String']>;
  uptime_in_days?: Maybe<Scalars['String']>;
  used_cpu_sys?: Maybe<Scalars['String']>;
  tcp_port?: Maybe<Scalars['String']>;
};

export type CommonJobFieldsFragment = Pick<Job, 'id' | 'progress' | 'attemptsMade' | 'failedReason' | 'status' | 'stacktrace' | 'timestamp' | 'returnValue' | 'finishedOn' | 'processedOn' | 'processingTime' | 'name' | 'opts' | 'delay'>;

export type CleanQueueMutationVariables = Exact<{
  queue: Scalars['ID'];
  status: JobStatusClean;
}>;


export type CleanQueueMutation = Pick<Mutation, 'cleanQueue'>;

export type ClearAllMetricsMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearAllMetricsMutation = Pick<Mutation, 'clearAllMetrics'>;

export type ClearMetricsMutationVariables = Exact<{
  queue: Scalars['ID'];
}>;


export type ClearMetricsMutation = Pick<Mutation, 'clearMetrics'>;

export type CloseQueueMutationVariables = Exact<{
  queue: Scalars['ID'];
}>;


export type CloseQueueMutation = { closeQueue?: Maybe<Pick<Queue, 'name'>> };

export type CreateJobLogMutationVariables = Exact<{
  queue: Scalars['ID'];
  id: Scalars['ID'];
  row: Scalars['String'];
}>;


export type CreateJobLogMutation = { log?: Maybe<Pick<Job, 'id'>> };

export type CreateJobMutationVariables = Exact<{
  input: CreateJobInput;
}>;


export type CreateJobMutation = { createJob?: Maybe<Pick<Job, 'id'>> };

export type DiscardJobMutationVariables = Exact<{
  queue: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type DiscardJobMutation = { discardJob?: Maybe<Pick<Job, 'id'>> };

export type EmptyQueueMutationVariables = Exact<{
  queue: Scalars['ID'];
}>;


export type EmptyQueueMutation = { emptyQueue?: Maybe<Pick<Queue, 'name'>> };

export type MoveJobToCompletedMutationVariables = Exact<{
  queue: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type MoveJobToCompletedMutation = { moveJobToCompleted?: Maybe<Pick<Job, 'id'>> };

export type MoveJobToFailedMutationVariables = Exact<{
  queue: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type MoveJobToFailedMutation = { moveJobToFailed?: Maybe<Pick<Job, 'id'>> };

export type PauseQueueMutationVariables = Exact<{
  queue: Scalars['ID'];
}>;


export type PauseQueueMutation = { pauseQueue?: Maybe<Pick<Queue, 'name'>> };

export type PromoteJobMutationVariables = Exact<{
  queue: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type PromoteJobMutation = { promoteJob?: Maybe<Pick<Job, 'id'>> };

export type RemoveJobMutationVariables = Exact<{
  queue: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type RemoveJobMutation = { removeJob?: Maybe<Pick<Job, 'id'>> };

export type RemoveJobsByPatternMutationVariables = Exact<{
  queue: Scalars['ID'];
  pattern: Scalars['String'];
}>;


export type RemoveJobsByPatternMutation = Pick<Mutation, 'removeJobsByPattern'>;

export type RemoveJobsMutationVariables = Exact<{
  queue: Scalars['ID'];
  jobs: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type RemoveJobsMutation = { removeJobs: Array<Maybe<Pick<Job, 'id'>>> };

export type ResumeQueueMutationVariables = Exact<{
  queue: Scalars['ID'];
}>;


export type ResumeQueueMutation = { resumeQueue?: Maybe<Pick<Queue, 'name'>> };

export type RetryJobMutationVariables = Exact<{
  queue: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type RetryJobMutation = { retryJob?: Maybe<Pick<Job, 'id'>> };

export type RetryJobsMutationVariables = Exact<{
  queue: Scalars['ID'];
  jobs: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type RetryJobsMutation = { retryJobs: Array<Maybe<Pick<Job, 'id'>>> };

export type UpdateJobDataMutationVariables = Exact<{
  queue: Scalars['ID'];
  id: Scalars['ID'];
  data?: Maybe<Scalars['JSON']>;
}>;


export type UpdateJobDataMutation = { updateJobData?: Maybe<Pick<Job, 'id'>> };

export type GetJobByIdQueryVariables = Exact<{
  queue: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type GetJobByIdQuery = { job?: Maybe<CommonJobFieldsFragment> };

export type GetJobDataQueryVariables = Exact<{
  queue: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type GetJobDataQuery = { job?: Maybe<Pick<Job, 'data'>> };

export type GetJobLogsQueryVariables = Exact<{
  queue: Scalars['ID'];
  id: Scalars['ID'];
}>;


export type GetJobLogsQuery = { job?: Maybe<{ logs?: Maybe<Pick<JobLogs, 'logs' | 'count'>> }> };

export type GetJobsForExportQueryVariables = Exact<{
  queue: Scalars['ID'];
  ids?: Maybe<Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>>;
  status?: Maybe<JobStatus>;
  id?: Maybe<Scalars['ID']>;
  dataSearch?: Maybe<Scalars['String']>;
}>;


export type GetJobsForExportQuery = { jobs: Array<(
    Pick<Job, 'id' | 'progress' | 'attemptsMade' | 'failedReason' | 'status' | 'stacktrace' | 'timestamp' | 'returnValue' | 'finishedOn' | 'processedOn' | 'name' | 'opts' | 'data'>
    & { logs?: Maybe<Pick<JobLogs, 'count' | 'logs'>> }
  )> };

export type GetJobsQueryVariables = Exact<{
  queue: Scalars['ID'];
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  status?: Maybe<JobStatus>;
  order?: Maybe<OrderEnum>;
  id?: Maybe<Scalars['ID']>;
  dataSearch?: Maybe<Scalars['String']>;
  fetchData: Scalars['Boolean'];
}>;


export type GetJobsQuery = { jobs: Array<(
    MakeOptional<Pick<Job, 'data'>, 'data'>
    & CommonJobFieldsFragment
  )> };

export type GetQueueMetricsQueryVariables = Exact<{
  queue: Scalars['ID'];
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
}>;


export type GetQueueMetricsQuery = { metrics?: Maybe<Array<(
    Pick<QueueMetrics, 'timestamp' | 'processingTime' | 'processingTimeMin' | 'processingTimeMax'>
    & { counts: Pick<QueueJobsCounts, 'waiting' | 'active' | 'completed' | 'failed' | 'delayed' | 'paused'> }
  )>> };

export type GetQueuesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQueuesQuery = { queues?: Maybe<Array<(
    Pick<Queue, 'id' | 'provider' | 'readonly' | 'name' | 'keyPrefix' | 'isPaused'>
    & { jobsCounts: Pick<QueueJobsCounts, 'waiting' | 'active' | 'completed' | 'failed' | 'delayed' | 'paused'> }
  )>> };

export type GetRedisInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRedisInfoQuery = { redisInfo?: Maybe<Pick<RedisInfo, 'redis_version' | 'redis_mode' | 'used_memory_human' | 'used_memory_peak_human' | 'total_system_memory_human' | 'connected_clients' | 'blocked_clients' | 'mem_fragmentation_ratio' | 'os' | 'uptime_in_seconds' | 'used_cpu_sys' | 'tcp_port'>> };
