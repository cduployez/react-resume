export class ConfigService {
    readonly avatarUrl: string | undefined = this.env.REACT_APP_AVATAR_URL || undefined;
    readonly backResumeUrl: string | undefined = this.env.REACT_APP_BACK_RESUME_URL || undefined;
    readonly githubUrl: string | undefined = this.env.REACT_APP_GITHUB_URL || undefined;
    readonly linkedInUrl: string | undefined = this.env.REACT_APP_LINKEDIN_URL || undefined;
    readonly pdfDownloadUrl: string | undefined = this.env.REACT_APP_PDF_DOWNLOAD_URL || undefined;
    readonly latestRevisionYear: string | undefined = this.env.REACT_APP_LATEST_REVISION_YEAR || undefined;

    constructor(private readonly env: NodeJS.ProcessEnv) {
    }
}