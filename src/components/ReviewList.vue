<template>
<div class="contianer">
       <!-- @if (Model.reviewsForThis != null)
            {
                var reviewsTruncated = Model.reviewsForThis.Skip(4 * ((int)Model.pageActive - 1)).ToList();
          -->
                <div class="boxed-list margin-bottom-60"> 
                    <div class="boxed-list-headline">
                        <h3><i class="icon-material-outline-thumb-up"></i> Work History and Feedback</h3>
                    </div>
                    <ul class="boxed-list-ul">
                        <!-- @for (int i = 0; i < 4 && i < reviewsTruncated.Count(); i++)
                        {
                            var seekerName = Model._mycontext.Users.Where(u => u.Id == reviewsTruncated[i].SeekerId).FirstOrDefault(); -->
                            <li>
                                <div class="boxed-list-item">
                                    <!-- Content -->
                                    <div class="item-content">
                                        <h4>@seekerName.FirstName @seekerName.LastName</h4>
                                        <div class="item-details margin-top-10">
                                            <div class="star-rating" data-rating="@reviewsTruncated[i].Rating"></div>
                                            <div class="detail-item"><i class="icon-material-outline-date-range"></i>From    @reviewsTruncated[i].OrderCreatedDate    ---    @reviewsTruncated[i].OrderCompletedDate</div>
                                        </div>
                                        <div class="item-description">
                                            <p>@reviewsTruncated[i].Comment</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        <!-- } -->
                    </ul>

                    <!-- Pagination -->
                    <div class="clearfix"></div>
                    <div class="pagination-container margin-top-40 margin-bottom-10">
                        <nav class="pagination">
                            <ul>
                                <!-- @if (Model.reviewsForThis.Count() > 4)
                {
                    var loopCount = (Model.reviewsForThis.Count()/4) + 2;
                    for (int i = 1; i < loopCount; i++)
                    {
                        Console.WriteLine($"Passed from to .html: {Model.pageActive}");
                        if (Model.pageActive == i)
                        { -->
                                            <li>
                                                <form asp-route-pageActive="@i" asp-page-handler="toPage" asp-route-providerId="@Model.providerUser.Id" method="post">
                                                    <button class="btn btn-primary ripple-effect current-page">@i</button>
                                                </form> 
                                            </li>
                                            continue;
                                        <!-- } -->
                                        <li>
                                            <form asp-route-pageActive="@i" asp-page-handler="toPage" asp-route-providerId="@Model.providerUser.Id" method="post">
                                                <button class="btn btn-primary ripple-effect">@i</button>
                                            </form>
                                        </li>
                                    <!-- }
                                } -->
                            </ul>
                        </nav>
                    </div>
                    <div class="clearfix"></div>
                    <!-- Pagination / End -->

                </div>
            <!-- }
            else
            { -->
                 <h1>No Review Yet!</h1>
            <!-- } -->

</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>