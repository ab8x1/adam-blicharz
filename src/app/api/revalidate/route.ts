
import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');

  if(token === process.env.REVALIDATE_TOKEN){
      revalidatePath('/projects/[project]', 'page');
      revalidatePath('/');
      return Response.json({ revalidated: true, now: Date.now() })
  }
  else{
    return Response.json({
        revalidated: false,
        now: Date.now(),
        message: 'Unauthorized',
    })
  }
}